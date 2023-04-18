

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "\n                    Make sure you are on a computer with a webcam, and that you have valid photo identification\n                    such as a driver's license or passport, before you continue.\n                ": "\nStellen Sie sicher, dass Sie sich auf einem Computer mit einer Webcam befinden und dass Sie sich mit einem g\u00fcltigen Lichtbildausweis ausweisen k\u00f6nnen.\n beispielsweise ein F\u00fchrerschein oder ein Personalausweis.",
    "\n                    Your verification attempt failed. Please read our guidelines to make\n                    sure you understand the requirements for successfully completing verification,\n                    then try again.\n                ": "\n                    Ihr Versuch zur Verifikation ist fehlgeschlagen. Bitte Lesen Sie\nunsere Richtlinien um sicher zu gehen, dass Sie die Anforderungen f\u00fcr eine erfolgreiche Durchf\u00fchrung der verifikation verstanden haben.\nBitte versuchen Sie es dann noch einmal.\n                ",
    "\n                    Your verification has expired. You must successfully complete a new identity verification\n                    before you can start the proctored exam.\n                ": "\n                    Ihre Verifikation ist abgelaufen. Sie m\u00fcssen sich erneut erfolgreich verifizieren\n                    bevor Sie die beaufsichtigte Pr\u00fcfung beginnen k\u00f6nnen.\n                ",
    "\n                    Your verification is pending. Results should be available 2-3 days after you\n                    submit your verification.\n                ": "\n                    Ihre Verifizierung in Bearbeitung. DIe Ergebnisse sollten 2-3 Tage\nnach Einreichung zur Verifikation verf\u00fcgbar sein.\n                ",
    "\n                Complete your verification before starting the proctored exam.\n            ": "\n                Schlie\u00dfen Sie die Verifikation ab, bevor Sie mit der beaufsichtigten Pr\u00fcfung beginnen.\n            ",
    "\n                You must successfully complete identity verification before you can start the proctored exam.\n            ": "\n                Sie m\u00fcssen die Verifikation Ihrer Identit\u00e4t vollst\u00e4ndig durchf\u00fchren, bevor Sie die beaufsichtigte Pr\u00fcfung beginnen k\u00f6nnen.\n            ",
    "\n            Do not close this window before you finish your exam. if you close this window, your proctoring session ends, and you will not successfully complete the proctored exam.\n          ": "\n            Schlie\u00dfen Sie nicht das Fenster, solange Sie die Pr\u00fcfung nicht abgeschlossen haben. Sollten Sie das Fenster trotzdem schli\u00dfen, ist Ihre Pr\u00fcfung beendet und wird nicht gewertet.\n          ",
    "\n            Return to the %(platform_name)s course window to start your exam. When you have finished your exam and\n            have marked it as complete, you can close this window to end the proctoring session\n            and upload your proctoring session data for review.\n          ": "\n            Zur\u00fcck zum %(platform_name)s Kurs, um die Pr\u00fcfung zu starten. Wenn Sie dieses beendet haben und\n            es als beendet markiert ist, k\u00f6nnen Sie das Fenster schlie\u00dfen, sodass die Session endet.\nAnschlie\u00dfend k\u00f6nnen Sie Ihre Daten zur Durchsicht hochladen.          ",
    "\n        About Proctored Exams\n        ": "\n        \u00dcber Pr\u00fcfungen unter Aufsicht\n        ",
    "\n        Are you sure you want to take this exam without proctoring?\n      ": "\n        Sind Sie sicher, dass Sie an dieser Pr\u00fcfung ohne Aufsicht teilnehmen wollen?\n      ",
    "\n        Due to unsatisfied prerequisites, you can only take this exam without proctoring.\n      ": "\n        Aufgrund von unerf\u00fcllten Voraussetzungen k\u00f6nnen Sie an dieser Pr\u00fcfung nur ohne Aufsicht teilnehmen.\n      ",
    "\n        I am ready to start this timed exam.\n      ": "\n        Ich bin bereit diese terminierte Pr\u00fcfung zu starten.\n      ",
    "\n        No, I want to continue working.\n      ": "\n        Nein, ich m\u00f6chte weiterarbeiten.\n      ",
    "\n        No, I'd like to continue working\n      ": "\n        Nein, ich m\u00f6chte noch weiterarbeiten.\n      ",
    "\n      After you submit your exam, your exam will be graded.\n    ": "\n      Nachdem Einreichen Ihrer Pr\u00fcfung, folgt die Benotung.\n    ",
    "\n      Are you sure that you want to submit your timed exam?\n    ": "\n      Sind Sie sicher, dass Sie Ihre terminierte Pr\u00fcfung einreichen m\u00f6chten?\n    ",
    "\n      Are you sure you want to end your proctored exam?\n    ": "\n      Sind Sie sicher, dass sie Ihre beaufsichtigte Pr\u00fcfung beenden wollen?\n    ",
    "\n      Because the due date has passed, you are no longer able to take this exam.\n    ": "\n      Da das F\u00e4lligkeitsdatum \u00fcberschritten ist, k\u00f6nnen Sie an dieser Pr\u00fcfung nicht mehr teilnehmen.\n    ",
    "\n      Error with proctored exam\n    ": "\nFehler mit der beaufsichtigten Pr\u00fcfung",
    "\n      If you have disabilities,\n      you might be eligible for an additional time allowance on timed exams.\n      Ask your course team for information about additional time allowances.\n    ": "\n      Wenn Sie behindert sind, \n      haben Sie m\u00f6glicherweise Anspruch auf eine zus\u00e4tzliche Zeitverg\u00fctung f\u00fcr terminierte Pr\u00fcfungen.\n      Fragen Sie Ihr Kursteam nach Informationen \u00fcber zus\u00e4tzliche Zeitverg\u00fctungen.",
    "\n      If you have questions about the status of your proctored exam results, contact %(platform_name)s Support.\n    ": "\nWenn Sie Fragen \u00fcber den Status Ihrer \u00fcberwachten Pr\u00fcfung haben, kontaktieren Sie den %(platform_name)s Support.",
    "\n      Make sure that you have selected \"Submit\" for each problem before you submit your exam.\n    ": "\n      Stellen Sie sicher, dass Sie jede Aufgabe  mit \"Abgabe\" markiert haben bevor Sie die Pr\u00fcfung beenden.\n    ",
    "\n      The due date for this exam has passed\n    ": "\nDas F\u00e4lligkeitsdatum f\u00fcr diese Pr\u00fcfung ist \u00fcberschritten.",
    "\n      This exam is proctored\n    ": "\nDiese Pr\u00fcfung geschieht unter Aufsicht",
    "\n      To view your exam questions and responses, select <strong>View my exam</strong>. The exam's review status is shown in the left navigation pane.\n    ": "\nUm die Pr\u00fcfungsfragen und Antworten einsehen zu k\u00f6nnen, w\u00e4hlen Sie <strong>Mein Exam einsehen</strong>. Der \u00dcberpr\u00fcfungsstatus der Pr\u00fcfung wird im linken Navigationsbereich angezeigt.",
    "\n      Yes, submit my timed exam.\n    ": "\n     Ja, meine terminierte Pr\u00fcfung jetzt einreichen.\n    ",
    "\n      You have submitted this proctored exam for review\n    ": "\n      Sie haben diese beaufsichtigte Pr\u00fcfung zur Durchsicht hochgeladen.\n    ",
    "\n      Your practice proctoring results: <b class=\"failure\"> Unsatisfactory </b>\n    ": "\n      Ergebnisse Ihrer \u00dcbungsaufsicht: <b class=\"failure\"> Nicht ausreichend </b>\n    ",
    "\n    %(exam_name)s is a Timed Exam (%(total_time)s)\n    ": "\n    %(exam_name)s ist eine terminierte Pr\u00fcfung (%(total_time)s)\n    ",
    "\n    The following prerequisites are in a <strong>pending</strong> state and must be successfully completed before you can proceed:\n    ": "\n   Die folgenden Voraussetzungen sind in einem <strong>unvollst\u00e4ndigen</strong> Status und m\u00fcssen erfolgreich abgeschlossen sein bevor Sie starten k\u00f6nnen.\n    ",
    "\n    You did not satisfy the following prerequisites:\n    ": "\n    Sie erf\u00fcllen die folgenden Vorraussetzungen nicht:\n    ",
    " From this point in time, you must follow the <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">online proctoring rules</a> to pass the proctoring review for your exam. ": " Von jetzt an m\u00fcssen Sie den <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">online Beaufsichtigungsregeln</a> folgen, um damit Ihre Pr\u00fcfung zugelassen wird.",
    " Your Proctoring Session Has Started ": "Ihre beaufsichtigte Sitzung hat begonnen",
    " and {num_of_minutes} minute": " und {num_of_minutes} Minuten",
    " and {num_of_minutes} minutes": " und {num_of_minutes} Minuten",
    " to complete and submit the exam.": "Zum Beenden und Einreichen der Pr\u00fcfung.",
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s von %(cnt)s ausgew\u00e4hlt",
      "%(sel)s von %(cnt)s ausgew\u00e4hlt"
    ],
    "(required):": "(erforderlich):",
    "6 a.m.": "6 Uhr",
    "6 p.m.": "18 Uhr",
    "Additional Time (minutes)": "Zus\u00e4tzliche Zeit (Minuten)",
    "After you select ": "Nach Ihrer Auswahl",
    "All Unreviewed": "Alle mit fehlendem Review",
    "All Unreviewed Failures": "Alle nicht Bestandenen mit fehlendem Review",
    "April": "April",
    "Are you sure you want to delete the following file? It cannot be restored.\nFile: ": "Wollen Sie die folgende Datei wirklich l\u00f6schen? Sie kann nicht wiederhergestellt werden.",
    "Assessment": "Beurteilung",
    "Assessments": "Beurteilungen",
    "August": "August",
    "Available %s": "Verf\u00fcgbare %s",
    "Back to Full List": "Zur\u00fcck zur kompletten Liste",
    "Block view is unavailable": "Blockansicht ist nicht verf\u00fcgbar",
    "Can I request additional time to complete my exam?": "Kann ich zus\u00e4tzliche Zeit beantragen, um meine Pr\u00fcfung abzuschlie\u00dfen?",
    "Cancel": "Abbrechen",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "\u00c4nderungen an Schritten, die nicht als Teil der Aufgabe ausgew\u00e4hlt sind, werden nicht gespeichert.",
    "Choose": "Ausw\u00e4hlen",
    "Choose a Date": "Datum w\u00e4hlen",
    "Choose a Time": "Uhrzeit w\u00e4hlen",
    "Choose a time": "Uhrzeit",
    "Choose all": "Alle ausw\u00e4hlen",
    "Chosen %s": "Ausgew\u00e4hlte %s",
    "Click to choose all %s at once.": "Klicken, um alle %s auf einmal auszuw\u00e4hlen.",
    "Click to remove all chosen %s at once.": "Klicken, um alle ausgew\u00e4hlten %s auf einmal zu entfernen.",
    "Close": "Schlie\u00dfen",
    "Continue Exam Without Proctoring": "Diese Pr\u00fcfung ohne Aufsicht fortsetzen",
    "Continue to Verification": "Weiter zur Verifikation",
    "Continue to my practice exam": "Weiter zu meiner \u00dcbungspr\u00fcfung",
    "Could not load teams information.": "Konnte keine Teaminformationen laden.",
    "Could not retrieve download url.": "Die Download URL konnte nicht aufgefunden werden.",
    "Could not retrieve upload url.": "Die Upload-URL konnte nicht aufgefunden werden.",
    "Couldn't Save This Assignment": "Konnte diese Aufgabe nicht speichern",
    "Course Id": "Kurs ID",
    "Created": "Erstellt",
    "Criterion Added": "Kriterium hinzugef\u00fcgt",
    "Criterion Deleted": "Kriterium gel\u00f6scht",
    "December": "Dezember",
    "Declined": "Abgelehnt",
    "Describe ": "Beschreibe",
    "Download Software Clicked": "Software Download gew\u00e4hlt",
    "Error": "Fehler",
    "Error getting the number of ungraded responses": "Fehler bei der Abfrage der Anzahl der unbenoteten Antworten",
    "Error when looking up username": "Fehler bei der Suche nach dem Benutzernamen",
    "Failed Proctoring": "Nicht bestanden unter Beaufsichtigung",
    "February": "Februar",
    "Feedback available for selection.": "Feedback f\u00fcr die Auswahl verf\u00fcgbar.",
    "File types can not be empty.": "Dateityp darf nicht leer sein.",
    "File upload failed: unsupported file type. Only the supported file types can be uploaded. If you have questions, please reach out to the course team.": "Das Hochladen der Datei ist fehlgeschlagen: Nicht unterst\u00fctzter Dateityp. Es k\u00f6nnen nur die unterst\u00fctzten Dateitypen hochgeladen werden. Wenn Sie Fragen haben, wenden Sie sich bitte an das Kursteam.",
    "Filter": "Filter",
    "Final Grade Received": "Erhaltene Endnote",
    "Go Back": "Gehe zur\u00fcck",
    "Heading 3": "\u00dcberschrift 3",
    "Heading 4": "\u00dcberschrift 4",
    "Heading 5": "\u00dcberschrift 5",
    "Heading 6": "\u00dcberschrift 6",
    "Hide": "Ausblenden",
    "I am ready to start this timed exam,": "Ich bin bereit diese zeitlich begrenzte Pr\u00fcfung zu beginnen, ",
    "If you leave this page without saving or submitting your response, you will lose any work you have done on the response.": "Wenn Sie diese Seite ohne vorheriges Speichern oder Einreichen der Antwort verlassen, geht die Arbeit an dieser Antwort verloren.",
    "If you leave this page without submitting your peer assessment, you will lose any work you have done.": "Wenn Sie diese Seite verlassen ohne Ihre Partnerbewertung zu \u00fcbermitteln, werden Sie alle Ihre bis jetzt erledigte Arbeit verlieren.",
    "If you leave this page without submitting your self assessment, you will lose any work you have done.": "Wenn Sie diese Seite ohne vorheriges Speichern oder Einreichen der Antwort verlassen, geht die Arbeit an dieser Antwort verloren.",
    "If you leave this page without submitting your staff assessment, you will lose any work you have done.": "Wenn Sie diese Seite ohne Einreichung der Mitarbeiterbewertung verlassen, geht Ihre Arbeit verloren.",
    "Individual file size must be {max_files_mb}MB or less.": "Die individuelle Dateigr\u00f6\u00dfe muss {max_files_mb}MB oder weniger sein.",
    "Is Sample Attempt": "Ist ein Probeversuch",
    "January": "Januar",
    "July": "Juli",
    "June": "Juni",
    "List of Open Assessments is unavailable": "Liste der offenen Beurteilungen ist nicht verf\u00fcgbar",
    "March": "M\u00e4rz",
    "May": "Mai",
    "Midnight": "Mitternacht",
    "Multiple teams returned for course": "Mehrere Teams sind f\u00fcr den Kurs zur\u00fcckgekehrt",
    "Must be a Staff User to Perform this request.": "Muss ein Mitarbeiter sein, um diese Anfrage auszuf\u00fchren.",
    "Noon": "Mittag",
    "Not Selected": "Nicht ausgew\u00e4hlt",
    "Note: You are %s hour ahead of server time.": [
      "Achtung: Sie sind %s Stunde der Serverzeit vorraus.",
      "Achtung: Sie sind %s Stunden der Serverzeit vorraus."
    ],
    "Note: You are %s hour behind server time.": [
      "Achtung: Sie sind %s Stunde hinter der Serverzeit.",
      "Achtung: Sie sind %s Stunden hinter der Serverzeit."
    ],
    "November": "November",
    "Now": "Jetzt",
    "October": "Oktober",
    "One or more rescheduling tasks failed.": "Eine oder mehrere Neuterminierungsaufgaben sind fehlgeschlagen.",
    "Only ": "Nur",
    "Option Deleted": "Einstellung gel\u00f6scht",
    "Paragraph": "Absatz",
    "Passed Proctoring": "Bestanden unter Beaufsichtigung",
    "Peer": "Partner",
    "Pending Session Review": "Laufende Begutachtung der Sitzung",
    "Please correct the outlined fields.": "Bitte korrigiere die umrandeten Felder.",
    "Please wait": "Bitte warten",
    "Practice Exam Completed": "\u00dcbungspr\u00fcfung bestanden",
    "Practice Exam Failed": "\u00dcbungspr\u00fcfung nicht bestanden",
    "Preformatted": "Vorformatiert",
    "Proctored Option Available": "Option Beaufsichtigt verf\u00fcgbar",
    "Proctored Option No Longer Available": "Die Option Beaufsichtigt steht nicht l\u00e4nger zur Verf\u00fcgung",
    "Ready To Start": "Bereit um zu starten",
    "Ready To Submit": "Bereit f\u00fcr die Einreichung",
    "Rejected": "Zur\u00fcckgewiesen",
    "Remove": "Entfernen",
    "Remove all": "Alle entfernen",
    "Retry Verification": "Verifikation wiederholen",
    "Review Policy Exception": "Ausnahme bei der Begutachtungsrichtlinine",
    "Saving...": "Speichert...",
    "Second Review Required": "Zweiter Review wird ben\u00f6tigt",
    "Self": "Selbst",
    "September": "September",
    "Server error.": "Server Problem.",
    "Show": "Einblenden",
    "Staff": "Betreuung",
    "Start System Check": "Beginne mit Systemcheck",
    "Started": "Gestartet",
    "Status of Your Response": "Status Ihrer Antwort",
    "Submitted": "Abgesendet",
    "Take this exam without proctoring.": "An diese Pr\u00fcfung ohne Aufsicht teilnehmen.",
    "Taking As Open Exam": "Als eine Freie Pr\u00fcfung teilnehmen",
    "Taking As Proctored Exam": "Als eine beaufsichtigten Pr\u00fcfung teilnehmen",
    "Taking as Proctored": "Als Beaufsichtigt teilnehmen",
    "The display of ungraded and checked out responses could not be loaded.": "Die Anzeige der unbenoteten und ausgecheckten Antworten konnte nicht geladen werden.",
    "The following file types are not allowed: ": "Die folgenden Dateitypen sind nicht erlaubt:",
    "The server could not be contacted.": "Der Server konnte nicht erreicht werden.",
    "The staff assessment form could not be loaded.": "Das Mitarbeiterbewertungsformular konnte nicht geladen werden.",
    "The submission could not be removed from the grading pool.": "Die Einreichung konnte nicht aus dem Einstufungspool entfernt werden.",
    "This assessment could not be submitted.": "Diese Bewertung konnte nicht \u00fcbermittelt werden.",
    "This exam has a time limit associated with it.": "Diese Pr\u00fcfung ist mit einer zeitlichen Begrenzung verbunden.",
    "This feedback could not be submitted.": "Diese R\u00fcckmeldung konnte nicht \u00fcbermittelt werden.",
    "This grade will be applied to all members of the team. Do you want to continue?": "Diese Benotung wird auf alle Mitglieder des Teams angewandt. Wollen Sie fortfahren?",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Dies ist die Liste der verf\u00fcgbaren %s. Einfach im unten stehenden Feld markieren und mithilfe des \"Ausw\u00e4hlen\"-Pfeils ausw\u00e4hlen.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Dies ist die Liste der ausgew\u00e4hlten %s. Einfach im unten stehenden Feld markieren und mithilfe des \"Entfernen\"-Pfeils wieder entfernen.",
    "This problem could not be saved.": "Dieses Problem konnte nicht gespeichert werden.",
    "This problem has already been released. Any changes will apply only to future assessments.": "Diese Fragestellung wurde bereits ver\u00f6ffentlicht. Jegliche \u00c4nderung betrifft nur zuk\u00fcnftige Bewertungen.",
    "This response could not be saved.": "Diese Antwort konnte nicht gespeichert werden.",
    "This response could not be submitted.": "Diese Antwort konnte nicht \u00fcbermittelt werden.",
    "This response has been saved but not submitted.": "Diese Antwort wurde gespeichert, aber nicht \u00fcbermittelt.",
    "This response has not been saved.": "Diese Antwort wurde nicht gespeichert.",
    "This section could not be loaded.": "Dieser Abschnitt konnte nicht geladen werden.",
    "Thumbnail view of ": "Miniaturansicht von",
    "Timed Exam": "Terminierte Pr\u00fcfung",
    "Timed Out": "Timed Out",
    "To pass this exam, you must complete the problems in the time allowed.": "Um diese Pr\u00fcfung zu bestehen, m\u00fcssen Sie die Probleme in der vorgegebenen Zeit l\u00f6sen.",
    "Today": "Heute",
    "Tomorrow": "Morgen",
    "Total Responses": "Gesamte Anzahl Antworten",
    "Training": "Training",
    "Type into this box to filter down the list of available %s.": "Durch Eingabe in diesem Feld l\u00e4sst sich die Liste der verf\u00fcgbaren %s eingrenzen.",
    "Unable to load": "Laden nicht m\u00f6glich",
    "Unexpected server error.": "Ein unerwarteter Fehler ist aufgetreten.",
    "Ungraded Practice Exam": "Upgrade auf Praktische Pr\u00fcfung",
    "Unit Name": "Name der Lerneinheit",
    "Units": "Lerneinheiten",
    "Unnamed Option": "Unbenannte Option",
    "User lookup failed": "Suche nach Benutzer fehlgeschlagen",
    "Verified": "Gepr\u00fcft",
    "View my exam": "Meine Pr\u00fcfung anzeigen",
    "Waiting": "Warten",
    "Warning": "Warnung",
    "Yesterday": "Gestern",
    "You have added a criterion. You will need to select an option for the criterion in the Learner Training step. To do this, click the Settings tab.": "Sie haben ein Kriterium hinzugef\u00fcgt. Sie m\u00fcssen eine Einstellung f\u00fcr dieses Kriterium im Teilnehmertrainingsschritt ausw\u00e4hlen. Klicken Sie hierzu auf den 'Einstellungen'-Tab.",
    "You have deleted a criterion. The criterion has been removed from the example responses in the Learner Training step.": "Sie haben ein Kriterium gel\u00f6scht. Das Kriterium wurde aus den Beispielantworten im Teilnehmer\u00fcbungsschritt entfernt.",
    "You have deleted all the options for this criterion. The criterion has been removed from the sample responses in the Learner Training step.": "Sie haben alle Optionen f\u00fcr dieses Kriterium gel\u00f6scht. Das Kriterium wurde aus den Beispielantworten im Teilnehmer\u00fcbungsschritt entfernt.",
    "You have deleted an option. That option has been removed from its criterion in the sample responses in the Learner Training step. You might have to select a new option for the criterion.": "Sie haben eine Option gel\u00f6scht. Diese Option wurde als Kriterium aus den Beispielantworten im Teilnehmer\u00fcbungsschritt entfernt. Sie m\u00fcssen wahrscheinlich eine neue Option f\u00fcr dieses Kriterium festlegen.",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Sie haben eine Aktion ausgew\u00e4hlt, aber keine \u00c4nderungen an bearbeitbaren Feldern vorgenommen. Sie wollten wahrscheinlich auf \"Ausf\u00fchren\" und nicht auf \"Speichern\" klicken.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Sie haben eine Aktion ausgew\u00e4hlt, aber ihre vorgenommenen \u00c4nderungen nicht gespeichert. Klicken Sie OK, um dennoch zu speichern. Danach m\u00fcssen Sie die Aktion erneut ausf\u00fchren.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Sie haben \u00c4nderungen an bearbeitbaren Feldern vorgenommen und nicht gespeichert. Wollen Sie die Aktion trotzdem ausf\u00fchren und Ihre \u00c4nderungen verwerfen?",
    "You must provide a learner name.": "Name erforderlich",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "Sie sind dabei Ihre Antwort f\u00fcr diese Aufgabe einzureichen. Nachdem Sie Ihre Antwort abgeschickt haben, k\u00f6nnen Sie diese nicht mehr \u00e4ndern und auch keine neue Antwort geben.",
    "Your file ": "Ihre Datei",
    "active proctored exams": "aktiv betreute Pr\u00fcfungen",
    "could not determine the course_id": "Konnte course_id nicht feststellen",
    "courses with active proctored exams": "Kurse mit aktiv betreuten Pr\u00fcfungen",
    "internally reviewed": "Intern begutachtet / reviewed",
    "one letter Friday\u0004F": "Fr",
    "one letter Monday\u0004M": "Mo",
    "one letter Saturday\u0004S": "Sa",
    "one letter Sunday\u0004S": "So",
    "one letter Thursday\u0004T": "Do",
    "one letter Tuesday\u0004T": "Di",
    "one letter Wednesday\u0004W": "Mi",
    "you have less than a minute remaining": "Sie haben weniger als eine Minute \u00fcbrig",
    "you have {remaining_time} remaining": "Sie haben noch {remaining_time} \u00fcbrig",
    "you will have ": "Sie haben in Zukunft",
    "your course": "Ihr Kurs",
    "{num_of_hours} hour": "{num_of_hours} Stunde",
    "{num_of_hours} hours": "{num_of_hours} Stunden",
    "{num_of_minutes} minute": "{num_of_minutes} Minute",
    "{num_of_minutes} minutes": "{num_of_minutes} Minuten"
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
    "DATETIME_FORMAT": "j. F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%Y",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j. F Y",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
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

