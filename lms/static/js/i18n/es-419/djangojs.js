

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "\n                    Make sure you are on a computer with a webcam, and that you have valid photo identification\n                    such as a driver's license or passport, before you continue.\n                ": "\nAseg\u00farese de que est\u00e9 usando una computadora con c\u00e1mara web, y que tiene una identificaci\u00f3n fotogr\u00e1fica v\u00e1lida\ncomo una licencia para conducir o un pasaporte, antes de seguir.",
    "\n                    Your verification attempt failed. Please read our guidelines to make\n                    sure you understand the requirements for successfully completing verification,\n                    then try again.\n                ": "\nSu verificaci\u00f3n no fue aprobada. Por favor, lea nuestra gu\u00eda para asegurarse\nde que entienda los requisitos para completar la verificaci\u00f3n exit\u00f3samente,\ny despu\u00e9s intente de nuevo.",
    "\n                    Your verification has expired. You must successfully complete a new identity verification\n                    before you can start the proctored exam.\n                ": "\nSu verificaci\u00f3n ha expirado. Debe completar la verificaci\u00f3n de identidad nuevamente\nantes de poder iniciar el examen supervisado.",
    "\n                    Your verification is pending. Results should be available 2-3 days after you\n                    submit your verification.\n                ": "\nSu verificaci\u00f3n est\u00e1 en proceso. Los resultados deben estar disponibles entre 2-3 d\u00edas despu\u00e9s del\nenv\u00edo de su verificaci\u00f3n.",
    "\n                Complete your verification before starting the proctored exam.\n            ": "\nComplete su verificaci\u00f3n antes de iniciar el examen supervisado.",
    "\n                You must successfully complete identity verification before you can start the proctored exam.\n            ": "\nEs necesario completar la verificaci\u00f3n de su identidad antes de iniciar el examen supervisado.",
    "\n            Do not close this window before you finish your exam. if you close this window, your proctoring session ends, and you will not successfully complete the proctored exam.\n          ": "\nNo cierre esta ventana antes de completar su examen. Si la cierra, su sesi\u00f3n supervisada terminar\u00e1, y no completar\u00e1 el examen supervisado.",
    "\n            Return to the %(platform_name)s course window to start your exam. When you have finished your exam and\n            have marked it as complete, you can close this window to end the proctoring session\n            and upload your proctoring session data for review.\n          ": "\nRegrese a la ventana del curso de %(platform_name)s para iniciar su examen. Una vez que haya completado su examen y\nlo haya marcado como completo, puede cerrar esta ventana para terminar la sesi\u00f3n supervisada\ny enviar su grabaci\u00f3n para la revisi\u00f3n de los supervisores.",
    "\n        About Proctored Exams\n        ": "\nAcerca de los ex\u00e1menes supervisados",
    "\n        Are you sure you want to take this exam without proctoring?\n      ": "\n\u00bfEst\u00e1 seguro que quiere tomar este examen sin supervisi\u00f3n?",
    "\n        Due to unsatisfied prerequisites, you can only take this exam without proctoring.\n      ": "\nDebido a prerrequisitos no cumplidos, solo puede tomar este examen sin supervisi\u00f3n.",
    "\n        I am ready to start this timed exam.\n      ": "\nEstoy listo/a para empezar este examen cronometrado.",
    "\n        No, I want to continue working.\n      ": "\nNo, quiero seguir trabajando.",
    "\n        No, I'd like to continue working\n      ": "\nNo, quiero seguir trabajando.",
    "\n      After you submit your exam, your exam will be graded.\n    ": "\nDespu\u00e9s de enviar el examen, el examen ser\u00e1 calificado.",
    "\n      Are you sure that you want to submit your timed exam?\n    ": "\n\u00bfEst\u00e1 seguro de que quiere enviar su examen cronometrado?",
    "\n      Are you sure you want to end your proctored exam?\n    ": "\n\u00bfEst\u00e1 seguro de que quiere finalizar su examen supervisado?",
    "\n      Because the due date has passed, you are no longer able to take this exam.\n    ": "\nDebido a que la fecha l\u00edmite ha pasado, ya no puede tomar este examen.",
    "\n      Error with proctored exam\n    ": "\nError en examen supervisado",
    "\n      If you have disabilities,\n      you might be eligible for an additional time allowance on timed exams.\n      Ask your course team for information about additional time allowances.\n    ": "\nSi tiene una discapacidad,\npuede ser eligible para un permiso de tiempo adicional en los ex\u00e1menes cronometrados.\nSolicite informaci\u00f3n sobre tiempo adicional al equipo del curso.",
    "\n      If you have questions about the status of your proctored exam results, contact %(platform_name)s Support.\n    ": "\nSi tiene preguntas sobre el estado de los resultados de su examen supervisado, cont\u00e1ctese con el equipo de apoyo de %(platform_name)s.",
    "\n      Make sure that you have selected \"Submit\" for each problem before you submit your exam.\n    ": "\nConfirme que haya seleccionado \"Enviar\" para cada problema antes de enviar el examen completo..",
    "\n      The due date for this exam has passed\n    ": "\nLa fecha l\u00edmite para este examen ha pasado.",
    "\n      This exam is proctored\n    ": "\nEste examen es supervisado",
    "\n      To view your exam questions and responses, select <strong>View my exam</strong>. The exam's review status is shown in the left navigation pane.\n    ": "\nPara ver las preguntas y respuestas de su examen, seleccione <strong>Ver mi examen</strong>. El estado de revisi\u00f3n del examen se muestra en el panel de navegaci\u00f3n a la izquierda.",
    "\n      Yes, submit my timed exam.\n    ": "\nS\u00ed, enviar my examen cronometrado.",
    "\n      You have submitted this proctored exam for review\n    ": "\nHa enviado este examen supervisado para revisi\u00f3n",
    "\n      Your practice proctoring results: <b class=\"failure\"> Unsatisfactory </b>\n    ": "\nEl resultado de su sesi\u00f3n supervisada de pr\u00e1ctica: <b class=\"failure\"> inadecuado </b>",
    "\n    %(exam_name)s is a Timed Exam (%(total_time)s)\n    ": "\n%(exam_name)s es un examen cronometrado (%(total_time)s)",
    "\n    The following prerequisites are in a <strong>pending</strong> state and must be successfully completed before you can proceed:\n    ": "\nLos siguientes requisitos est\u00e1n en un estado <strong>pendiente</strong> y tienen que ser cumplidos exitosamente antes de que pueda proceder:",
    "\n    You did not satisfy the following prerequisites:\n    ": "\nNo cumpli\u00f3 los siguientes prerrequisitos:",
    " From this point in time, you must follow the <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">online proctoring rules</a> to pass the proctoring review for your exam. ": "A partir de este momento, debe seguir las <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">reglas de supervisi\u00f3n online</a> para aprobar la revisi\u00f3n de la supervisi\u00f3n para su examen.",
    " Your Proctoring Session Has Started ": "Su Sesi\u00f3n Supervisada Ha Comenzado",
    " and {num_of_minutes} minute": "y {num_of_minutes} minuto",
    " and {num_of_minutes} minutes": "y {num_of_minutes} minutos",
    " to complete and submit the exam.": "para completar y enviar el examen.",
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s de %(cnt)s seleccionado",
      "%(sel)s de  %(cnt)s seleccionados",
      ""
    ],
    "(required):": "(requerido):",
    "6 a.m.": "6 a.m.",
    "6 p.m.": "6 p.m.",
    "Additional Time (minutes)": "Tiempo adicional (minutos)",
    "After you select ": "Despu\u00e9s de seleccionar",
    "All Unreviewed": "Todos los no revisados",
    "All Unreviewed Failures": "Todos los fracasos no revisados",
    "April": "Abril",
    "Are you sure you want to delete the following file? It cannot be restored.\nFile: ": "\u00bfEst\u00e1s seguro de que desea eliminar el siguiente archivo? No puede ser restaurado.\nArchivo:",
    "Assessment": "Evaluaci\u00f3n",
    "Assessments": "Evaluaciones",
    "August": "Agosto",
    "Available %s": "%s Disponibles",
    "Back to Full List": "Volver a la lista completa",
    "Block view is unavailable": "Vista de bloque no disponible",
    "Can I request additional time to complete my exam?": "\u00bfPuedo pedir tiempo adicional para completar mi examen?",
    "Cancel": "Cancelar",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "Los cambios en los pasos que no est\u00e1n seleccionados como parte de la tarea no ser\u00e1n guardados.",
    "Choose": "Elegir",
    "Choose a Date": "Elija una fecha",
    "Choose a Time": "Elija una hora",
    "Choose a time": "Elija una hora",
    "Choose all": "Selecciona todos",
    "Chosen %s": "%s elegidos",
    "Click to choose all %s at once.": "Haga clic para seleccionar todos los %s de una vez",
    "Click to remove all chosen %s at once.": "Haz clic para eliminar todos los %s elegidos",
    "Close": "Cerrar",
    "Continue Exam Without Proctoring": "Continuar Examen Sin Supervisi\u00f3n",
    "Continue to Verification": "Continuar a la verificaci\u00f3n",
    "Continue to my practice exam": "Continuar a mi examen de pr\u00e1ctica",
    "Could not load teams information.": "No se pudo cargar la informaci\u00f3n de los equipos.",
    "Could not retrieve download url.": "No se pudo recuperar la url de descarga.",
    "Could not retrieve upload url.": "No se pudo recuperar la url de subida.",
    "Couldn't Save This Assignment": "No se ha podido salvar esta tarea.",
    "Course Id": "Id de Curso",
    "Created": "Creado",
    "Criterion Added": "Criterio a\u00f1adido.",
    "Criterion Deleted": "Criterio borrado.",
    "December": "Diciembre",
    "Declined": "Negado",
    "Describe ": "Describir",
    "Download Software Clicked": "'Descargar aplicaci\u00f3n' seleccionado",
    "Error": "Error",
    "Error getting the number of ungraded responses": "Error al obtener el n\u00famero de respuestas no calificadas.",
    "Error when looking up username": "Error al buscar el nombre de usuario",
    "Failed Proctoring": "Supervisi\u00f3n fallida",
    "February": "Febrero",
    "Feedback available for selection.": "Comentarios disponibles para esta selecci\u00f3n.",
    "File types can not be empty.": "Tipo de archivo no puede ser vac\u00edo.",
    "Filter": "Filtro",
    "Final Grade Received": "Calificaci\u00f3n final recibida",
    "Go Back": "Volver Atr\u00e1s",
    "Heading 3": "Encabezado 3",
    "Heading 4": "Encabezado 4",
    "Heading 5": "Encabezado 5",
    "Heading 6": "Encabezado 6",
    "Hide": "Esconder",
    "I am ready to start this timed exam,": "Estoy listo/a para empezar este examen cronometrado,",
    "If you leave this page without saving or submitting your response, you will lose any work you have done on the response.": "Si abandona esta p\u00e1gina sin guardar o enviar su respuesta, perder\u00e1 todo el trabajo realizado en la respuesta.",
    "If you leave this page without submitting your peer assessment, you will lose any work you have done.": "Si abandona esta p\u00e1gina sin enviar su trabajo, perder\u00e1 todos los cambios realizados.",
    "If you leave this page without submitting your self assessment, you will lose any work you have done.": "Si abandona esta p\u00e1gina sin enviar su auto evaluaci\u00f3n, perder\u00e1 todos los cambios realizados.",
    "If you leave this page without submitting your staff assessment, you will lose any work you have done.": "Si abandona esta p\u00e1gina sin enviar su evaluaci\u00f3n, se perder\u00e1n todos los cambios realizados.",
    "Individual file size must be {max_files_mb}MB or less.": "El tama\u00f1o del archivo debe ser de aproximadamente {max_files_mb}MB o menos.",
    "Is Sample Attempt": "Es un intento de muestra",
    "January": "Enero",
    "July": "Julio",
    "June": "Junio",
    "List of Open Assessments is unavailable": "Lista de evaluaciones abiertas no disponible",
    "March": "Marzo",
    "May": "Mayo",
    "Midnight": "Medianoche",
    "Multiple teams returned for course": "Varios equipos encontrados para el curso",
    "Must be a Staff User to Perform this request.": "Hay que ser un usuario del equipo para cumplir esta petici\u00f3n.",
    "Noon": "Mediod\u00eda",
    "Not Selected": "No seleccionado",
    "Note: You are %s hour ahead of server time.": [
      "Nota: Usted esta a %s horas por delante de la hora del servidor.",
      "Nota: Usted va %s horas por delante de la hora del servidor.",
      ""
    ],
    "Note: You are %s hour behind server time.": [
      "Nota: Usted esta a %s hora de retraso de tiempo de servidor.",
      "Nota: Usted va %s horas por detr\u00e1s de la hora del servidor.",
      ""
    ],
    "November": "Noviembre",
    "Now": "Ahora",
    "October": "Octubre",
    "One or more rescheduling tasks failed.": "Una o m\u00e1s tareas de re-programaci\u00f3n fall\u00f3.",
    "Only ": "Solo",
    "Option Deleted": "Opci\u00f3n borrada.",
    "Paragraph": "P\u00e1rrafo",
    "Passed Proctoring": "Supervisi\u00f3n aprobada",
    "Peer": "Par",
    "Pending Session Review": "Revisi\u00f3n de sesi\u00f3n pendiente",
    "Please correct the outlined fields.": "Por favor corrija los campos resaltados.",
    "Please wait": "Por favor espere",
    "Practice Exam Completed": "Examen de pr\u00e1ctica completado",
    "Practice Exam Failed": "Examen de pr\u00e1ctica no aprobado",
    "Preformatted": "Preformateado",
    "Proctored Option Available": "Opci\u00f3n supervisada disponible",
    "Proctored Option No Longer Available": "La opci\u00f3n supervisado ya no est\u00e1 disponible",
    "Ready To Start": "Listo para comenzar",
    "Ready To Submit": "Listo para enviar",
    "Rejected": "Rechazado",
    "Remove": "Eliminar",
    "Remove all": "Eliminar todos",
    "Retry Verification": "Reenviar verificaci\u00f3n",
    "Review Policy Exception": "Revisar excepci\u00f3n a la pol\u00edtica",
    "Saving...": "Guardando...",
    "Second Review Required": "Segunda revisi\u00f3n requerida",
    "Self": "Auto",
    "September": "Septiembre",
    "Server error.": "Error en el servidor.",
    "Show": "Mostrar",
    "Staff": "Equipo del Curso",
    "Start System Check": "Empezar chequeo del sistema",
    "Started": "Inici\u00f3",
    "Status of Your Response": "Estado de su respuesta",
    "Submitted": "Enviado",
    "Take this exam without proctoring.": "Tomar este examen sin supervisi\u00f3n.",
    "Taking As Open Exam": "Tomando como examen abierto",
    "Taking As Proctored Exam": "Tomando como examen supervisado",
    "Taking as Proctored": "Tomando como examen supervisado",
    "The display of ungraded and checked out responses could not be loaded.": "La lista de respuestas marcadas y no calificadas no pudo ser cargada.",
    "The following file types are not allowed: ": "Los siguientes tipos de archivos son soportados:",
    "The server could not be contacted.": "No se ha podido contactar con el servidor.",
    "The staff assessment form could not be loaded.": "La valoraci\u00f3n del equipo del curso no pudo ser cargada.",
    "The submission could not be removed from the grading pool.": "La entrega no pudo ser eliminada de la lista de evaluaciones",
    "This assessment could not be submitted.": "Esta revisi\u00f3n no pudo ser enviada.",
    "This exam has a time limit associated with it.": "Esta examen tiene un l\u00edmite de tiempo.",
    "This feedback could not be submitted.": "Este comentario no pudo ser enviado.",
    "This grade will be applied to all members of the team. Do you want to continue?": "Esta calificaci\u00f3n se aplicar\u00e1 a todos los miembros del equipo. \u00bfDesea continuar?",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Esta es la lista de %s disponibles. Puede elegir algunos seleccion\u00e1ndolos en la caja inferior y luego haciendo clic en la flecha \"Elegir\" que hay entre las dos cajas.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Esta es la lista de los %s elegidos. Puede elmininar algunos seleccion\u00e1ndolos en la caja inferior y luego haciendo click en la flecha \"Eliminar\" que hay entre las dos cajas.",
    "This problem could not be saved.": "Este problema no pudo ser guardado.",
    "This problem has already been released. Any changes will apply only to future assessments.": "Este problema ya ha sido liberado. Cualquier cambio en el mismo se aplicar\u00e1 solo a los env\u00edo futuros.",
    "This response could not be saved.": "Esta respuesta no pudo ser guardada.",
    "This response could not be submitted.": "Esta respuesta no pudo ser enviada.",
    "This response has been saved but not submitted.": "La respuesta ha sido guardada, pero no enviada.",
    "This response has not been saved.": "Esta respuesta no ha sido guardada.",
    "This section could not be loaded.": "Esta secci\u00f3n no pudo ser cargada.",
    "Thumbnail view of ": "Vista miniatura de",
    "Timed Exam": "Examen cronometrado",
    "Timed Out": "Tiempo agotado",
    "To pass this exam, you must complete the problems in the time allowed.": "Para aprobar este examen, hay que completar los problemas durante el tiempo permitido.",
    "Today": "Hoy",
    "Tomorrow": "Ma\u00f1ana",
    "Total Responses": "Total de respuestas",
    "Training": "Entrenamiento",
    "Type into this box to filter down the list of available %s.": "Escriba en este cuadro para filtrar la lista de %s disponibles",
    "Unable to load": "No se ha podido cargar",
    "Unexpected server error.": "Ocurri\u00f3 un error inesperado en el servidor.",
    "Ungraded Practice Exam": "Examen de pr\u00e1ctica no calificado",
    "Unit Name": "Nombre de la unidad",
    "Units": "Unidades",
    "Unnamed Option": "Opci\u00f3n sin nombre",
    "User lookup failed": "Fall\u00f3 b\u00fasqueda del usuario",
    "Verified": "Verificado",
    "View my exam": "Ver mi examen",
    "Waiting": "Esperando",
    "Warning": "Atenci\u00f3n:",
    "Yesterday": "Ayer",
    "You have added a criterion. You will need to select an option for the criterion in the Learner Training step. To do this, click the Settings tab.": "Ha a\u00f1adido un nuevo criterio. Deber\u00e1 seleccionar una opci\u00f3n para el criterio que se usar\u00e1 en el paso de entrenamiento del estudiante.  Para hacer esto, haga clic en la pesta\u00f1a de Configuraci\u00f3n. ",
    "You have deleted a criterion. The criterion has been removed from the example responses in the Learner Training step.": "Ha borrado un criterio. El criterio ha sido removido de los ejemplos de respuesta en el paso de entrenamiento del estudiante.",
    "You have deleted all the options for this criterion. The criterion has been removed from the sample responses in the Learner Training step.": "Has eliminado todas las opciones para este criterio. El criterio ha sido removido de las respuestas de ejemplo en el paso de entrenamiento del estudiante.",
    "You have deleted an option. That option has been removed from its criterion in the sample responses in the Learner Training step. You might have to select a new option for the criterion.": "Has borrado esta opci\u00f3n. Esta opci\u00f3n ha sido removida del criterio en el ejemplo de respuestas en el paso de entrenamiento del estudiante. Es posible que tenga que seleccionar una nueva opci\u00f3n para el criterio.",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Ha seleccionado una acci\u00f3n y no hs hecho ning\u00fan cambio en campos individuales. Probablemente est\u00e9 buscando el bot\u00f3n Ejecutar en lugar del bot\u00f3n Guardar.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Ha seleccionado una acci\u00f3n, pero no ha guardado los cambios en los campos individuales todav\u00eda. Pulse OK para guardar. Tendr\u00e1 que volver a ejecutar la acci\u00f3n.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Tiene cambios sin guardar en campos editables individuales. Si ejecuta una acci\u00f3n, los cambios no guardados se perder\u00e1n.",
    "You must provide a learner name.": "Debe ingresar un nombre.",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "Est\u00e1 a punto de subir su respuesta para esta tarea. Despu\u00e9s de subirla, no podr\u00e1 cambiarla o subir una nueva respuesta.",
    "Your file ": "Su archivo",
    "active proctored exams": "ex\u00e1menes supervisados activos",
    "could not determine the course_id": "No se pudo determinar la ID del curso",
    "courses with active proctored exams": "cursos con ex\u00e1menes supervisados activos",
    "internally reviewed": "revisado internamente",
    "one letter Friday\u0004F": "V",
    "one letter Monday\u0004M": "L",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "D",
    "one letter Thursday\u0004T": "J",
    "one letter Tuesday\u0004T": "M",
    "one letter Wednesday\u0004W": "M",
    "you have less than a minute remaining": "Queda menos de un minuto",
    "you have {remaining_time} remaining": "usted tiene {remaining_time} para terminar",
    "you will have ": "Tendr\u00e1",
    "your course": "su curso",
    "{num_of_hours} hour": "{num_of_hours} hora",
    "{num_of_hours} hours": "{num_of_hours} horas",
    "{num_of_minutes} minute": "{num_of_minutes} minuto",
    "{num_of_minutes} minutes": "{num_of_minutes} minutos"
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
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \\a \\l\\a\\s H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%y %H:%M:%S",
      "%d/%m/%y %H:%M:%S.%f",
      "%d/%m/%y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j \\d\\e F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
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

