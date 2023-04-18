

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "\n                    Make sure you are on a computer with a webcam, and that you have valid photo identification\n                    such as a driver's license or passport, before you continue.\n                ": "\n                    \u8bf7\u786e\u4fdd\u60a8\u7684\u7535\u8111\u5e26\u6709\u7f51\u7edc\u6444\u50cf\u5934\uff0c\u5e76\u6709\u6709\u6548\u7684\u5e26\u7167\u7247\u8eab\u4efd\u8bc1\u660e\uff0c\n                    \u4f8b\u5982\u9a7e\u9a76\u8bc1\u6216\u62a4\u7167\u3002\n                ",
    "\n                    Your verification attempt failed. Please read our guidelines to make\n                    sure you understand the requirements for successfully completing verification,\n                    then try again.\n                ": "\n                    \u60a8\u7684\u8eab\u4efd\u8ba4\u8bc1\u5931\u8d25\u4e86\uff0c\u8bf7\u5148\u4ed4\u7ec6\u9605\u8bfb\u8bf4\u660e\uff0c\u786e\u4fdd\u60a8\u7406\u89e3\u6210\u529f\u5b8c\u6210\u8ba4\u8bc1\u7684\u8981\u6c42\uff0c\u7136\u540e\u91cd\u65b0\u8ba4\u8bc1\u3002\n                ",
    "\n                    Your verification has expired. You must successfully complete a new identity verification\n                    before you can start the proctored exam.\n                ": "\n                   \u60a8\u7684\u8eab\u4efd\u8ba4\u8bc1\u5df2\u8fc7\u671f\uff0c\u60a8\u5fc5\u987b\u91cd\u65b0\u6210\u529f\u5b8c\u6210\u8ba4\u8bc1\uff0c\n                    \u7136\u540e\u624d\u80fd\u8fdb\u884c\u76d1\u8003\u8003\u8bd5\u3002\n                ",
    "\n                    Your verification is pending. Results should be available 2-3 days after you\n                    submit your verification.\n                ": "\n                    \u60a8\u7684\u8eab\u4efd\u8ba4\u8bc1\u6b63\u5728\u8fdb\u884c\u4e2d\uff0c\u63d0\u4ea4\u8ba4\u8bc1\u540e\u76842-3\u5929\u5185\u53ef\u67e5\u770b\u7ed3\u679c\u3002\n                ",
    "\n                Complete your verification before starting the proctored exam.\n            ": "\n                \u5f00\u59cb\u76d1\u8003\u8003\u8bd5\u524d\uff0c\u8bf7\u5148\u5b8c\u6210\u8eab\u4efd\u8ba4\u8bc1\u3002\n            ",
    "\n                You must successfully complete identity verification before you can start the proctored exam.\n            ": "\n                \u5728\u5f00\u59cb\u8fdb\u884c\u76d1\u8003\u8003\u8bd5\u524d\uff0c\u60a8\u5fc5\u987b\u5148\u5b8c\u6210\u8eab\u4efd\u8ba4\u8bc1\u3002\n            ",
    "\n            Do not close this window before you finish your exam. if you close this window, your proctoring session ends, and you will not successfully complete the proctored exam.\n          ": "\n          \u5982\u679c\u8003\u8bd5\u672a\u7ed3\u675f\uff0c\u8bf7\u52ff\u5173\u95ed\u6b64\u7a97\u53e3\u3002\u4e00\u65e6\u5173\u95ed\uff0c\u90a3\u4e48\u60a8\u7684\u76d1\u8003\u6a21\u5f0f\u5c06\u7ed3\u675f\uff0c\u5e76\u4e14\u65e0\u6cd5\u6210\u529f\u5b8c\u6210\u76d1\u8003\u8003\u8bd5\u3002\n          ",
    "\n            Return to the %(platform_name)s course window to start your exam. When you have finished your exam and\n            have marked it as complete, you can close this window to end the proctoring session\n            and upload your proctoring session data for review.\n          ": "\n            \u8fd4\u56de %(platform_name)s \u8bfe\u7a0b\u7a97\u53e3\u6765\u5f00\u59cb\u8003\u8bd5\u3002\u5f53\u60a8\u5b8c\u6210\u8003\u8bd5\u5e76\u4e14\n            \u5c06\u5176\u6807\u8bb0\u4e3a\u5df2\u5b8c\u6210\u540e\uff0c\u5219\u53ef\u4ee5\u5173\u95ed\u6b64\u7a97\u53e3\u6765\u7ed3\u675f\u76d1\u8003\u8003\u8bd5\n            \u5e76\u4e0a\u4f20\u60a8\u7684\u76d1\u8003\u6570\u636e\u4ee5\u5ba1\u6838\u3002\n          ",
    "\n        About Proctored Exams\n        ": "\n        \u5173\u4e8e\u76d1\u8003\u8003\u8bd5\n        ",
    "\n        Are you sure you want to take this exam without proctoring?\n      ": "\n        \u60a8\u786e\u5b9a\u5173\u95ed\u76d1\u8003\u6a21\u5f0f\uff1f\n      ",
    "\n        Due to unsatisfied prerequisites, you can only take this exam without proctoring.\n      ": "\n        \u60a8\u4e0d\u6ee1\u8db3\u5148\u4fee\u6761\u4ef6\uff0c\u65e0\u6cd5\u5f00\u542f\u76d1\u8003\u6a21\u5f0f\u3002\n      ",
    "\n        I am ready to start this timed exam.\n      ": "\n       \u6211\u5df2\u51c6\u5907\u597d\u5f00\u59cb\u6b64\u9650\u65f6\u8003\u8bd5\u3002\n      ",
    "\n        No, I want to continue working.\n      ": "\n        \u7ee7\u7eed\u8003\u8bd5\n      ",
    "\n        No, I'd like to continue working\n      ": "\n        \u4e0d\uff0c\u7ee7\u7eed\u8003\u8bd5\n      ",
    "\n      After you submit your exam, your exam will be graded.\n    ": "\n      \u5728\u60a8\u63d0\u4ea4\u8003\u8bd5\u540e\uff0c\u4f1a\u5bf9\u60a8\u7684\u56de\u7b54\u8fdb\u884c\u8bc4\u5206\u3002\n    ",
    "\n      Are you sure that you want to submit your timed exam?\n    ": "\n      \u60a8\u786e\u5b9a\u8981\u63d0\u4ea4\u6b64\u9650\u65f6\u8003\u8bd5\u5417\uff1f\n    ",
    "\n      Are you sure you want to end your proctored exam?\n    ": "\n      \u60a8\u786e\u5b9a\u7ed3\u675f\u76d1\u8003\u8003\u8bd5\uff1f\n    ",
    "\n      Because the due date has passed, you are no longer able to take this exam.\n    ": "\n      \u5df2\u8d85\u8fc7\u622a\u6b62\u65e5\u671f\uff0c\u60a8\u65e0\u6cd5\u8fdb\u884c\u8003\u8bd5\u3002\n    ",
    "\n      Error with proctored exam\n    ": "\n      \u76d1\u8003\u8003\u8bd5\u53d1\u751f\u9519\u8bef\n    ",
    "\n      If you have disabilities,\n      you might be eligible for an additional time allowance on timed exams.\n      Ask your course team for information about additional time allowances.\n    ": "\n      \u5982\u679c\u60a8\u8eab\u4f53\u6709\u6b8b\u75be\u95ee\u9898\uff0c\n      \u90a3\u4e48\u60a8\u53ef\u80fd\u6709\u8d44\u683c\u7533\u8bf7\u989d\u5916\u7684\u8003\u8bd5\u65f6\u95f4\u3002\n      \u60a8\u53ef\u4ee5\u5411\u60a8\u7684\u8bfe\u7a0b\u56e2\u961f\u54a8\u8be2\u5173\u4e8e\u989d\u5916\u8003\u8bd5\u65f6\u95f4\u7684\u4fe1\u606f\u3002\n    ",
    "\n      If you have questions about the status of your proctored exam results, contact %(platform_name)s Support.\n    ": "\n     \u5982\u679c\u60a8\u5bf9\u81ea\u5df1\u7684\u76d1\u8003\u6a21\u8bd5\u7ed3\u679c\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u8054\u7cfb%(platform_name)s\u652f\u6301\u5e2e\u52a9\u3002\n    ",
    "\n      Make sure that you have selected \"Submit\" for each problem before you submit your exam.\n    ": "\n      \u8bf7\u786e\u4fdd\u60a8\u5df2\u70b9\u51fb\u201c\u63d0\u4ea4\u201d\u6bcf\u4e2a\u95ee\u9898\u7684\u7b54\u6848\uff0c\u7136\u540e\u518d\u63d0\u4ea4\u8003\u8bd5\u3002\n    ",
    "\n      The due date for this exam has passed\n    ": "\n      \u5df2\u8d85\u8fc7\u6b64\u8003\u8bd5\u7684\u622a\u6b62\u65e5\u671f\n    ",
    "\n      This exam is proctored\n    ": "\n      \u9700\u5f00\u542f\u76d1\u8003\u6a21\u5f0f\n    ",
    "\n      To view your exam questions and responses, select <strong>View my exam</strong>. The exam's review status is shown in the left navigation pane.\n    ": "\n      \u5982\u9700\u67e5\u770b\u60a8\u7684\u8003\u8bd5\u9898\u76ee\u548c\u56de\u7b54\uff0c\u8bf7\u70b9\u51fb <strong>\u67e5\u770b\u6211\u7684\u8003\u8bd5</strong>\u3002\u8003\u8bd5\u8bc4\u5206\u72b6\u6001\u663e\u793a\u5728\u5de6\u65b9\u5bfc\u822a\u65b9\u6846\u4e2d\u3002\n    ",
    "\n      Yes, submit my timed exam.\n    ": "\n      \u786e\u5b9a\u63d0\u4ea4\n    ",
    "\n      You have submitted this proctored exam for review\n    ": "\n      \u60a8\u5df2\u63d0\u4ea4\u6b64\u76d1\u8003\u8003\u8bd5\u81f3\u5ba1\u6838\n    ",
    "\n      Your practice proctoring results: <b class=\"failure\"> Unsatisfactory </b>\n    ": "\n      \u60a8\u7684\u6a21\u62df\u76d1\u8003\u7ed3\u679c\uff1a <b class=\"failure\"> \u4e0d\u6ee1\u610f </b>\n    ",
    "\n    %(exam_name)s is a Timed Exam (%(total_time)s)\n    ": "\n    %(exam_name)s \u662f\u9650\u65f6\u8003\u8bd5 (%(total_time)s)\n    ",
    "\n    The following prerequisites are in a <strong>pending</strong> state and must be successfully completed before you can proceed:\n    ": "\n    \u4ee5\u4e0b\u5148\u4fee\u6761\u4ef6\u4efb\u52a1\u4e3a <strong>\u5f85\u5904\u7406</strong> \u72b6\u6001\uff0c \u8bf7\u52a1\u5fc5\u5148\u6210\u529f\u5b8c\u6210\u4efb\u52a1\u518d\u7ee7\u7eed\u64cd\u4f5c\u4e0b\u4e00\u6b65\uff1a\n    ",
    "\n    You did not satisfy the following prerequisites:\n    ": "\n    \u60a8\u4e0d\u6ee1\u8db3\u4e0b\u5217\u5148\u4fee\u6761\u4ef6\uff1a\n    ",
    " From this point in time, you must follow the <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">online proctoring rules</a> to pass the proctoring review for your exam. ": "\u4ece\u73b0\u5728\u5f00\u59cb\uff0c\u60a8\u5fc5\u987b\u9075\u5b88<a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">\u5728\u7ebf\u76d1\u8003\u89c4\u5219</a>\u4ee5\u901a\u8fc7\u76d1\u8003\u8003\u8bd5\u5ba1\u6838\u3002",
    " Your Proctoring Session Has Started ": "\u76d1\u8003\u6a21\u5f0f\u5df2\u5f00\u59cb",
    " and {num_of_minutes} minute": "\u548c {num_of_minutes} \u5206\u949f",
    " and {num_of_minutes} minutes": "\u548c{num_of_minutes}\u5206\u949f",
    " to complete and submit the exam.": "\u6765\u5b8c\u6210\u5e76\u63d0\u4ea4\u8003\u8bd5\u3002",
    "(required):": "(\u5fc5\u987b):",
    "Additional Time (minutes)": "\u989d\u5916\u65f6\u95f4\uff08\u5206\u949f\uff09",
    "After you select ": "\u9009\u62e9\u5b8c\u6210\u540e",
    "All Unreviewed": "\u5168\u90e8\u672a\u5ba1\u6838",
    "All Unreviewed Failures": "\u6240\u6709\u672a\u5ba1\u6838\u7684\u5931\u8d25\u9879",
    "Assessment": "\u8bc4\u5206",
    "Assessments": "\u8bc4\u5206",
    "Back to Full List": "\u8fd4\u56de\u5b8c\u6574\u5217\u8868",
    "Block view is unavailable": "\u5757\u89c6\u56fe\u4e0d\u53ef\u7528",
    "Can I request additional time to complete my exam?": "\u6211\u53ef\u4ee5\u7533\u8bf7\u989d\u5916\u8003\u8bd5\u65f6\u95f4\u5417\uff1f",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "\u672a\u4f5c\u4e3a\u4f5c\u4e1a\u90e8\u5206\u7684\u6b65\u9aa4\u53d8\u66f4\u5c06\u4e0d\u4f1a\u88ab\u4fdd\u5b58\u3002",
    "Close": "\u5173\u95ed",
    "Continue Exam Without Proctoring": "\u5173\u95ed\u76d1\u8003\u6a21\u5f0f",
    "Continue to Verification": "\u7ee7\u7eed\u8ba4\u8bc1\u8eab\u4efd",
    "Continue to my practice exam": "\u7ee7\u7eed\u8fdb\u884c\u6a21\u62df\u8003\u8bd5",
    "Could not retrieve download url.": "\u4e0d\u80fd\u8bfb\u53d6\u4e0b\u8f7d\u94fe\u63a5\u5730\u5740",
    "Could not retrieve upload url.": "\u4e0d\u80fd\u8bfb\u53d6\u4e0a\u4f20\u94fe\u63a5\u5730\u5740",
    "Couldn't Save This Assignment": "\u4fdd\u5b58\u4f5c\u4e1a\u5931\u8d25",
    "Course Id": "\u8bfe\u7a0b\u7f16\u53f7",
    "Created": "\u521b\u5efa",
    "Criterion Added": "\u6807\u51c6\u5df2\u6dfb\u52a0",
    "Criterion Deleted": "\u89c4\u8303\u5df2\u5220\u9664",
    "Declined": "\u62d2\u7edd",
    "Describe ": "\u63cf\u8ff0",
    "Download Software Clicked": "\u5df2\u70b9\u51fb\u4e0b\u8f7d\u8f6f\u4ef6",
    "Error": "\u9519\u8bef",
    "Error getting the number of ungraded responses": "\u83b7\u53d6\u672a\u8bc4\u5206\u56de\u590d\u6570\u91cf\u51fa\u73b0\u9519\u8bef",
    "Failed Proctoring": "\u672a\u901a\u8fc7\u76d1\u8003",
    "Feedback available for selection.": "\u53ef\u4f9b\u9009\u62e9\u7684\u53cd\u9988\u3002",
    "File types can not be empty.": "\u6587\u4ef6\u7c7b\u578b\u4e0d\u80fd\u4e3a\u7a7a\u3002",
    "Final Grade Received": "\u6700\u7ec8\u6536\u83b7\u5f97\u5206",
    "Go Back": "\u8fd4\u56de",
    "Heading 3": "\u6807\u9898 3",
    "Heading 4": "\u6807\u9898 4",
    "Heading 5": "\u6807\u9898 5",
    "Heading 6": "\u6807\u9898 6",
    "I am ready to start this timed exam,": "\u6211\u51c6\u5907\u597d\u5f00\u59cb\u6b64\u95e8\u9650\u65f6\u8003\u8bd5\u4e86",
    "If you leave this page without saving or submitting your response, you will lose any work you have done on the response.": "\u5982\u679c\u60a8\u4e0d\u4fdd\u5b58\u6216\u8005\u63d0\u4ea4\u7b54\u6848\u5c31\u79bb\u5f00\uff0c\u60a8\u53ef\u80fd\u4f1a\u4e22\u5931\u6389\u5199\u5b8c\u7684\u4e00\u5207\u3002",
    "If you leave this page without submitting your peer assessment, you will lose any work you have done.": "\u5982\u679c\u60a8\u79bb\u5f00\u672c\u9875\u65f6\u6ca1\u6709\u63d0\u4ea4\u60a8\u7684\u540c\u5b66\u4e92\u8bc4\uff0c\u60a8\u5c06\u4e22\u5931\u60a8\u6240\u505a\u7684\u4e00\u5207\u3002",
    "If you leave this page without submitting your self assessment, you will lose any work you have done.": "\u5982\u679c\u60a8\u672a\u63d0\u4ea4\u60a8\u7684\u81ea\u6211\u8bc4\u4f30\u5c31\u79bb\u5f00\u6b64\u9875\u9762\uff0c\u60a8\u5c06\u4e22\u5931\u6240\u505a\u7684\u4e00\u5207\u3002",
    "If you leave this page without submitting your staff assessment, you will lose any work you have done.": "\u5982\u679c\u60a8\u672a\u63d0\u4ea4\u60a8\u7684\u5458\u5de5\u8bc4\u4f30\u5c31\u79bb\u5f00\u6b64\u9875\u9762\uff0c\u60a8\u5c06\u4e22\u5931\u6240\u505a\u7684\u4e00\u5207\u3002",
    "Is Sample Attempt": "\u6837\u672c\u5c1d\u8bd5",
    "List of Open Assessments is unavailable": "\u5f00\u653e\u8bc4\u4f30\u5217\u8868\u4e0d\u53ef\u7528",
    "Must be a Staff User to Perform this request.": "\u6b64\u6b21\u8bf7\u6c42\u5fc5\u987b\u662f\u7531\u5458\u5de5\u7528\u6237\u63d0\u51fa\u3002",
    "Not Selected": "\u672a\u9009\u4e2d",
    "One or more rescheduling tasks failed.": "\u4e00\u9879\u6216\u51e0\u9879\u6539\u671f\u4efb\u52a1\u5931\u8d25\u4e86\u3002",
    "Option Deleted": "\u9009\u9879\u5df2\u5220\u9664",
    "Paragraph": "\u6bb5\u843d",
    "Passed Proctoring": "\u5df2\u901a\u8fc7\u76d1\u8003",
    "Peer": "\u540c\u884c",
    "Pending Session Review": "\u7b49\u5f85\u5ba1\u6838",
    "Please correct the outlined fields.": "\u8bf7\u6539\u6b63\u753b\u51fa\u533a\u57df",
    "Please wait": "\u8bf7\u7a0d\u5019",
    "Practice Exam Completed": "\u5df2\u5b8c\u6210\u6a21\u62df\u8003",
    "Practice Exam Failed": "\u6a21\u62df\u8003\u5931\u8d25",
    "Preformatted": "\u683c\u5f0f\u5316",
    "Proctored Option Available": "\u53ef\u542f\u7528\u76d1\u8003\u6a21\u5f0f",
    "Proctored Option No Longer Available": "\u65e0\u6cd5\u518d\u542f\u7528\u76d1\u8003\u6a21\u5f0f",
    "Ready To Start": "\u51c6\u5907\u5f00\u59cb",
    "Ready To Submit": "\u51c6\u5907\u63d0\u4ea4",
    "Rejected": "\u62d2\u7edd",
    "Retry Verification": "\u91cd\u8bd5\u9a8c\u8bc1",
    "Review Policy Exception": "\u5ba1\u6838\u653f\u7b56\u7684\u7279\u6b8a\u60c5\u51b5",
    "Saving...": "\u6b63\u5728\u4fdd\u5b58\u2026",
    "Second Review Required": "\u9700\u8981\u4e8c\u6b21\u5ba1\u6838",
    "Self": "\u81ea\u5df1",
    "Server error.": "\u670d\u52a1\u5668\u9519\u8bef\u3002",
    "Staff": "\u5de5\u4f5c\u4eba\u5458",
    "Start System Check": "\u5f00\u59cb\u68c0\u67e5\u7cfb\u7edf",
    "Started": "\u5df2\u7ecf\u5f00\u59cb",
    "Status of Your Response": "\u60a8\u7684\u7b54\u6848\u7684\u72b6\u6001",
    "Submitted": "\u5df2\u63d0\u4ea4",
    "Take this exam without proctoring.": "\u5173\u95ed\u672c\u6b21\u8003\u8bd5\u7684\u76d1\u8003\u529f\u80fd\u3002",
    "Taking As Open Exam": "\u5207\u6362\u81f3\u5f00\u5377\u6a21\u5f0f",
    "Taking As Proctored Exam": "\u5207\u6362\u81f3\u76d1\u8003\u6a21\u5f0f",
    "Taking as Proctored": "\u5207\u6362\u81f3\u76d1\u8003\u6a21\u5f0f",
    "The display of ungraded and checked out responses could not be loaded.": "\u672a\u6253\u5206\u53ca\u5df2\u901a\u8fc7\u56de\u7b54\u7684\u7a97\u53e3\u65e0\u6cd5\u52a0\u8f7d\u3002",
    "The following file types are not allowed: ": "\u4e0b\u5217\u6587\u4ef6\u7c7b\u578b\u4e0d\u53ef\u7528\uff1a",
    "The server could not be contacted.": "\u65e0\u6cd5\u8054\u7cfb\u670d\u52a1\u5668\u3002",
    "The staff assessment form could not be loaded.": "\u5de5\u4f5c\u4eba\u5458\u8bc4\u6d4b\u8868\u683c\u65e0\u6cd5\u52a0\u8f7d\u3002",
    "The submission could not be removed from the grading pool.": "\u8be5\u63d0\u4ea4\u65e0\u6cd5\u4ece\u8bc4\u5206\u6c60\u4e2d\u5220\u9664\u3002",
    "This assessment could not be submitted.": "\u8fd9\u4efd\u8bc4\u6d4b\u65e0\u6cd5\u63d0\u4ea4\u3002",
    "This exam has a time limit associated with it.": "\u6b64\u95e8\u8003\u8bd5\u8bbe\u6709\u65f6\u9650\u3002",
    "This feedback could not be submitted.": "\u8fd9\u6761\u53cd\u9988\u65e0\u6cd5\u63d0\u4ea4\u3002",
    "This problem could not be saved.": "\u8be5\u95ee\u9898\u65e0\u6cd5\u4fdd\u5b58\u3002",
    "This problem has already been released. Any changes will apply only to future assessments.": "\u6b64\u95ee\u9898\u5df2\u53d1\u5e03\u3002\u4efb\u4f55\u66f4\u6539\u90fd\u53ea\u9002\u7528\u4e8e\u672a\u6765\u7684\u8bc4\u4f30\u3002",
    "This response could not be saved.": "\u8be5\u7b54\u6848\u65e0\u6cd5\u4fdd\u5b58\u3002",
    "This response could not be submitted.": "\u8be5\u7b54\u6848\u65e0\u6cd5\u63d0\u4ea4\u3002",
    "This response has been saved but not submitted.": "\u8be5\u7b54\u6848\u5df2\u7ecf\u4fdd\u5b58\u4e86\uff0c\u4f46\u4ecd\u672a\u63d0\u4ea4\u3002",
    "This response has not been saved.": "\u8be5\u7b54\u6848\u8fd8\u6ca1\u6709\u88ab\u4fdd\u5b58\u3002",
    "This section could not be loaded.": "\u8fd9\u4e2a\u90e8\u5206\u65e0\u6cd5\u52a0\u8f7d\u3002",
    "Thumbnail view of ": "\u7f29\u7565\u89c6\u56fe",
    "Timed Exam": "\u8ba1\u65f6\u8003\u8bd5",
    "Timed Out": "\u65f6\u95f4\u5230",
    "To pass this exam, you must complete the problems in the time allowed.": "\u60a8\u5fc5\u987b\u5728\u65f6\u9650\u5185\u5b8c\u6210\u9898\u76ee\u624d\u53ef\u4ee5\u901a\u8fc7\u8003\u8bd5\u3002",
    "Total Responses": "\u89e3\u7b54\u603b\u6570",
    "Training": "\u8bad\u7ec3",
    "Unable to load": "\u4e0d\u80fd\u52a0\u8f7d",
    "Unexpected server error.": "\u670d\u52a1\u5668\u5f02\u5e38\u9519\u8bef\u3002",
    "Ungraded Practice Exam": "\u4e0d\u8ba1\u5206\u6a21\u62df\u8003\u8bd5",
    "Unit Name": "\u5355\u5143\u540d",
    "Units": "\u5355\u5143",
    "Unnamed Option": "\u672a\u547d\u540d\u9009\u9879",
    "Verified": "\u5df2\u8ba4\u8bc1",
    "View my exam": "\u67e5\u770b\u6211\u7684\u8003\u8bd5",
    "Waiting": "\u7b49\u5f85",
    "Warning": "\u8b66\u544a",
    "You have added a criterion. You will need to select an option for the criterion in the Learner Training step. To do this, click the Settings tab.": "\u60a8\u5df2\u7ecf\u6dfb\u52a0\u4e86\u4e00\u4e2a\u6807\u51c6\u3002\u60a8\u5c06\u9700\u8981\u4e3a\u201c\u5b66\u5458\u8bad\u7ec3\u201d\u6b65\u9aa4\u4e2d\u7684\u6807\u51c6\u9009\u62e9\u4e00\u4e2a\u9009\u9879\u3002\u8981\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u8bf7\u5355\u51fb\u201c\u8bbe\u7f6e\u201d\u9009\u9879\u5361\u3002",
    "You have deleted a criterion. The criterion has been removed from the example responses in the Learner Training step.": "\u60a8\u5df2\u5220\u9664\u4e86\u4e00\u4e2a\u6807\u51c6\u3002\u6b64\u6807\u51c6\u5df2\u4ece\u201c\u5b66\u5458\u8bad\u7ec3\u201d\u6b65\u9aa4\u7684\u56de\u590d\u793a\u4f8b\u4e2d\u64a4\u9500\u3002",
    "You have deleted all the options for this criterion. The criterion has been removed from the sample responses in the Learner Training step.": "\u60a8\u5df2\u5220\u9664\u6b64\u6807\u51c6\u7684\u6240\u6709\u9009\u9879\u3002\u6b64\u6807\u51c6\u5df2\u4ece\u201c\u5b66\u5458\u8bad\u7ec3\u201d\u6b65\u9aa4\u7684\u56de\u590d\u793a\u4f8b\u4e2d\u5220\u9664\u3002",
    "You have deleted an option. That option has been removed from its criterion in the sample responses in the Learner Training step. You might have to select a new option for the criterion.": "\u60a8\u5df2\u5220\u9664\u4e00\u4e2a\u9009\u9879\u3002\u6b64\u9009\u9879\u5df2\u4ece\u201c\u5b66\u5458\u8bad\u7ec3\u201d\u6b65\u9aa4\u4e2d\u7684\u56de\u590d\u793a\u4f8b\u6807\u51c6\u4e2d\u5220\u9664\u3002\u60a8\u53ef\u80fd\u5fc5\u987b\u4e3a\u6b64\u6807\u51c6\u9009\u62e9\u4e00\u4e2a\u65b0\u9009\u9879\u3002",
    "You must provide a learner name.": "\u60a8\u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2a\u5b66\u751f\u59d3\u540d\u3002",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "\u60a8\u5c06\u4f1a\u63d0\u4ea4\u5bf9\u672c\u6b21\u4f5c\u4e1a\u7684\u7b54\u6848\u3002\u63d0\u4ea4\u540e\uff0c\u60a8\u5c06\u65e0\u6cd5\u4fee\u6539\u6216\u8005\u63d0\u4ea4\u65b0\u7684\u7b54\u6848\u3002",
    "Your file ": "\u60a8\u7684\u6587\u4ef6",
    "active proctored exams": "\u5df2\u6fc0\u6d3b\u76d1\u8003\u529f\u80fd",
    "could not determine the course_id": "\u65e0\u6cd5\u786e\u5b9acourse_id",
    "courses with active proctored exams": "\u5df2\u6fc0\u6d3b\u76d1\u8003\u6a21\u5f0f\u7684\u8bfe\u7a0b",
    "internally reviewed": "\u5185\u90e8\u5ba1\u6838",
    "you have less than a minute remaining": "\u5269\u4f59\u65f6\u95f4\u4e0d\u8db3\u4e00\u5206\u949f",
    "you have {remaining_time} remaining": "\u5269\u4f59\u65f6\u95f4{remaining_time}",
    "you will have ": "\u60a8\u6709",
    "your course": "\u60a8\u7684\u8bfe\u7a0b",
    "{num_of_hours} hour": "{num_of_hours}\u4e2a\u5c0f\u65f6",
    "{num_of_hours} hours": "{num_of_hours}\u4e2a\u5c0f\u65f6",
    "{num_of_minutes} minute": "{num_of_minutes} \u5206\u949f",
    "{num_of_minutes} minutes": "{num_of_minutes}\u5206\u949f"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "N j, Y, P",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%Y",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M",
      "%m/%d/%y"
    ],
    "DATE_FORMAT": "N j, Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y",
      "%b %d %Y",
      "%b %d, %Y",
      "%d %b %Y",
      "%d %b, %Y",
      "%B %d %Y",
      "%B %d, %Y",
      "%d %B %Y",
      "%d %B, %Y"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "F j",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "m/d/Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "P",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

