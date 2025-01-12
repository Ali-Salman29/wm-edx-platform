"""
Helper lib for AdminReport_tasks API.

Includes methods to check args for rescoring task, encoding student input,
and task submission logic, including handling the Celery backend.
"""


import json
import logging

from celery.result import AsyncResult
from celery.states import FAILURE, READY_STATES, REVOKED, SUCCESS
from django.utils.translation import ugettext as _

from common.djangoapps.util.db import outer_atomic
from lms.djangoapps.courseware.module_render import get_xqueue_callback_url_prefix
from openedx.features.wikimedia_features.admin_dashboard.models import PROGRESS,AdminReportTask
from openedx.features.wikimedia_features.admin_dashboard.grades import CourseProgressReport


log = logging.getLogger(__name__)


class AlreadyRunningError(Exception):
    """Exception indicating that a background task is already running"""

    message = _('Requested task is already running')

    def __init__(self, message=None):

        if not message:
            message = self.message  # pylint: disable=exception-message-attribute
        super().__init__(message)


class QueueConnectionError(Exception):
    """
    Exception indicating that celery task was not created successfully.
    """
    message = _('Error occured. Please try again later.')

    def __init__(self, message=None):
        if not message:
            message = self.message  # pylint: disable=exception-message-attribute
        super().__init__(message)


def _task_is_running(course_id, task_type, task_key):
    """Checks if a particular task is already running"""
    running_tasks = AdminReportTask.objects.filter(
        course_id=course_id, task_type=task_type, task_key=task_key
    )
    # exclude states that are "ready" (i.e. not "running", e.g. failure, success, revoked):
    for state in READY_STATES:
        running_tasks = running_tasks.exclude(task_state=state)
    return len(running_tasks) > 0


def _reserve_task(course_id, task_type, task_key, task_input, requester):
    """
    Creates a database entry to indicate that a task is in progress.

    Throws AlreadyRunningError if the task is already in progress.
    Includes the creation of an arbitrary value for task_id, to be
    submitted with the task call to celery.

    Note that there is a chance of a race condition here, when two users
    try to run the same task at almost exactly the same time.  One user
    could be after the check and before the create when the second user
    gets to the check.  At that point, both users are able to run their
    tasks simultaneously.  This is deemed a small enough risk to not
    put in further safeguards.
    """

    if _task_is_running(course_id, task_type, task_key):
        log.warning("Duplicate task found for task_type %s and task_key %s", task_type, task_key)
        error_message = generate_already_running_error_message(task_type)
        raise AlreadyRunningError(error_message)

    try:
        most_recent_id = AdminReportTask.objects.latest('id').id
    except AdminReportTask.DoesNotExist:
        most_recent_id = "None found"
    finally:
        log.warning(
            "No duplicate tasks found: task_type %s, task_key %s, and most recent task_id = %s",
            task_type,
            task_key,
            most_recent_id
        )

    # Create log entry now, so that future requests will know it's running.
    return AdminReportTask.create(course_id, task_type, task_key, task_input, requester)


def generate_already_running_error_message(task_type):
    """
    Returns already running error message for given task type.
    """

    message = ''
    report_types = {
        'grade_problems': _('problem grade'),
        'problem_responses_csv': _('problem responses'),
        'profile_info_csv': _('enrolled learner profile'),
        'may_enroll_info_csv': _('enrollment'),
        'detailed_enrollment_report': _('detailed enrollment'),
        'course_survey_report': _('survey'),
        'proctored_exam_results_report': _('proctored exam results'),
        'export_ora2_data': _('ORA data'),
        'grade_course': _('grade'),

    }

    if report_types.get(task_type):

        message = _(
            "The {report_type} report is being created. "
            "To view the status of the report, see Pending Tasks below. "
            "You will be able to download the report when it is complete."
        ).format(report_type=report_types.get(task_type))

    return message


def _get_xmodule_instance_args(request, task_id):
    """
    Calculate parameters needed for instantiating xmodule instances.

    The `request_info` will be passed to a tracking log function, to provide information
    about the source of the task request.   The `xqueue_callback_url_prefix` is used to
    permit old-style xqueue callbacks directly to the appropriate module in the LMS.
    The `task_id` is also passed to the tracking log function.
    """
    request_info = {'username': request.user.username,
                    'user_id': request.user.id,
                    'ip': request.META['REMOTE_ADDR'],
                    'agent': request.META.get('HTTP_USER_AGENT', '').encode().decode('latin1'),
                    'host': request.META['SERVER_NAME'],
                    }

    xmodule_instance_args = {'xqueue_callback_url_prefix': get_xqueue_callback_url_prefix(request),
                             'request_info': request_info,
                             'task_id': task_id,
                             }
    return xmodule_instance_args


def _update_instructor_task(admin_report_task, task_result):
    """
    Updates and possibly saves a AdminReportTask entry based on a task Result.

    Used when updated status is requested.

    The `admin_report_task` that is passed in is updated in-place, but
    is usually not saved.  In general, tasks that have finished (either with
    success or failure) should have their entries updated by the task itself,
    so are not updated here.  Tasks that are still running are not updated
    and saved while they run.  The one exception to the no-save rule are tasks that
    are in a "revoked" state.  This may mean that the task never had the
    opportunity to update the AdminReportTask entry.

    Tasks that are in progress and have subtasks doing the processing do not look
    to the task's AsyncResult object.  When subtasks are running, the
    AdminReportTask object itself is updated with the subtasks' progress,
    not any AsyncResult object.  In this case, the AdminReportTask is
    not updated at all.

    Calculates json to store in "task_output" field of the `admin_report_task`,
    as well as updating the task_state.

    For a successful task, the json contains the output of the task result.
    For a failed task, the json contains "exception", "message", and "traceback"
    keys.   A revoked task just has a "message" stating it was revoked.
    """
    # Pull values out of the result object as close to each other as possible.
    # If we wait and check the values later, the values for the state and result
    # are more likely to have changed.  Pull the state out first, and
    # then code assuming that the result may not exactly match the state.
    task_id = task_result.task_id
    result_state = task_result.state
    returned_result = task_result.result
    result_traceback = task_result.traceback

    # Assume we don't always save the AdminReportTask entry if we don't have to,
    # but that in most cases we will update the AdminReportTask in-place with its
    # current progress.
    entry_needs_updating = True
    entry_needs_saving = False
    task_output = None

    if admin_report_task.task_state == PROGRESS and len(admin_report_task.subtasks) > 0:
        # This happens when running subtasks:  the result object is marked with SUCCESS,
        # meaning that the subtasks have successfully been defined.  However, the AdminReportTask
        # will be marked as in PROGRESS, until the last subtask completes and marks it as SUCCESS.
        # We want to ignore the parent SUCCESS if subtasks are still running, and just trust the
        # contents of the AdminReportTask.
        entry_needs_updating = False
    elif result_state in [PROGRESS, SUCCESS]:
        # construct a status message directly from the task result's result:
        # it needs to go back with the entry passed in.
        log.info("background task (%s), state %s:  result: %s", task_id, result_state, returned_result)
        task_output = AdminReportTask.create_output_for_success(returned_result)
    elif result_state == FAILURE:
        # on failure, the result's result contains the exception that caused the failure
        exception = returned_result
        traceback = result_traceback if result_traceback is not None else ''
        log.warning("background task (%s) failed: %s %s", task_id, returned_result, traceback)
        task_output = AdminReportTask.create_output_for_failure(exception, result_traceback)
    elif result_state == REVOKED:
        # on revocation, the result's result doesn't contain anything
        # but we cannot rely on the worker thread to set this status,
        # so we set it here.
        entry_needs_saving = True
        log.warning("background task (%s) revoked.", task_id)
        task_output = AdminReportTask.create_output_for_revoked()

    # save progress and state into the entry, even if it's not being saved:
    # when celery is run in "ALWAYS_EAGER" mode, progress needs to go back
    # with the entry passed in.
    if entry_needs_updating:
        admin_report_task.task_state = result_state
        if task_output is not None:
            admin_report_task.task_output = task_output

        if entry_needs_saving:
            admin_report_task.save()


def _update_instructor_task_state(admin_report_task, task_state, message=None):
    """
    Update state and output of AdminReportTask object.
    """
    admin_report_task.task_state = task_state
    if message:
        admin_report_task.task_output = message

    admin_report_task.save()


def _handle_instructor_task_failure(admin_report_task, error):
    """
    Do required operations if task creation was not complete.
    """
    log.info("Admin Report task (%s) failed, result: %s", admin_report_task.task_id, str(error))
    _update_instructor_task_state(admin_report_task, FAILURE, str(error))

    raise QueueConnectionError()


def _get_async_result(task_id):
    """
    Use this minor indirection to facilitate mocking the AsyncResult in tests.
    """
    return AsyncResult(task_id)


def get_updated_instructor_task(task_id):
    """
    Returns AdminReportTask object corresponding to a given `task_id`.

    If the AdminReportTask thinks the task is still running, then
    the task's result is checked to return an updated state and output.
    """
    # First check if the task_id is known
    try:
        admin_report_task = AdminReportTask.objects.get(task_id=task_id)
    except AdminReportTask.DoesNotExist:
        log.warning("query for AdminReportTask status failed: task_id=(%s) not found", task_id)
        return None

    # if the task is not already known to be done, then we need to query
    # the underlying task's result object:
    if admin_report_task.task_state not in READY_STATES:
        result = _get_async_result(task_id)
        _update_instructor_task(admin_report_task, result)

    return admin_report_task


def get_status_from_instructor_task(admin_report_task):
    """
    Get the status for a given AdminReportTask entry.

    Returns a dict, with the following keys:
      'task_id': id assigned by LMS and used by celery.
      'task_state': state of task as stored in celery's result store.
      'in_progress': boolean indicating if task is still running.
      'task_progress': dict containing progress information.  This includes:
          'attempted': number of attempts made
          'succeeded': number of attempts that "succeeded"
          'total': number of possible subtasks to attempt
          'action_name': user-visible verb to use in status messages.  Should be past-tense.
          'duration_ms': how long the task has (or had) been running.
          'exception': name of exception class raised in failed tasks.
          'message': returned for failed and revoked tasks.
          'traceback': optional, returned if task failed and produced a traceback.

     """
    status = {}

    if admin_report_task is not None:
        # status basic information matching what's stored in AdminReportTask:
        status['task_id'] = admin_report_task.task_id
        status['task_state'] = admin_report_task.task_state
        status['in_progress'] = admin_report_task.task_state not in READY_STATES
        if admin_report_task.task_output is not None:
            status['task_progress'] = json.loads(admin_report_task.task_output)

    return status


def submit_task(request, task_type, task_class, course_id, task_input, task_key):
    """
    Helper method to submit a task.

    Reserves the requested task, based on the `course_id`, `task_type`, and `task_key`,
    checking to see if the task is already running.  The `task_input` is also passed so that
    it can be stored in the resulting AdminReportTask entry.  Arguments are extracted from
    the `request` provided by the originating server request.  Then the task is submitted to run
    asynchronously, using the specified `task_class` and using the task_id constructed for it.

    Cannot be inside an atomic block.

    `AlreadyRunningError` is raised if the task is already running.
    """
    with outer_atomic():
        # check to see if task is already running, and reserve it otherwise:
        admin_report_task = _reserve_task(course_id, task_type, task_key, task_input, request.user)

    # make sure all data has been committed before handing off task to celery. 
    task_id = admin_report_task.task_id
    task_args = [admin_report_task.id, _get_xmodule_instance_args(request, task_id), request.user.id]
    try:
        task_class.apply_async(task_args, task_id=task_id)

    except Exception as error:  # lint-amnesty, pylint: disable=broad-except
        _handle_instructor_task_failure(admin_report_task, error)

    return admin_report_task
