

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "\n            Do not close this window before you finish your exam. if you close this window, your proctoring session ends, and you will not successfully complete the proctored exam.\n          ": "\n            Ne fermez pas cette fen\u00eatre avant d'avoir termin\u00e9 votre examen. Si vous fermez cette fen\u00eatre, votre session d'examen surveill\u00e9 sera termin\u00e9.\n          ",
    "\n            Return to the %(platform_name)s course window to start your exam. When you have finished your exam and\n            have marked it as complete, you can close this window to end the proctoring session\n            and upload your proctoring session data for review.\n          ": "\n           Retournez sur la page du cours %(platform_name)s pour d\u00e9marrer votre examen. Lorsque vous avez fini l'examen et\n           indiqu\u00e9 qu'il est compl\u00e9t\u00e9, vous pouvez fermer cette fen\u00eatre pour terminer la session d'examen surveill\u00e9\n            et charg\u00e9 votre session pour \u00e9valuation par nos \u00e9quipes.\n          ",
    "\n        About Proctored Exams\n        ": "\nA propos des examens surveill\u00e9s",
    "\n        Are you sure you want to take this exam without proctoring?\n      ": "\n\u00cates vous s\u00fbr de vouloir faire cet examen sans surveillance?",
    "\n        I am ready to start this timed exam.\n      ": "\nJe suis pr\u00eat \u00e0 d\u00e9marrer cet examen \u00e0 temps limit\u00e9.",
    "\n        No, I want to continue working.\n      ": "\nNon, je veux continuer \u00e0 travailler",
    "\n        No, I'd like to continue working\n      ": "\nNon je voudrais continuer \u00e0 travailler",
    "\n      Are you sure that you want to submit your timed exam?\n    ": "\n      \u00cates-vous s\u00fbr de vouloir soumettre votre examen \u00e0 temps limit\u00e9?\n    ",
    "\n      Are you sure you want to end your proctored exam?\n    ": "\n      \u00cates-vous s\u00fbre de vouloir terminer votre examen surveill\u00e9?\n    ",
    "\n      Because the due date has passed, you are no longer able to take this exam.\n    ": "\nVous ne pouvez plus passer cet examen car, l\u2019\u00e9ch\u00e9ance est pass\u00e9e.",
    "\n      Error with proctored exam\n    ": "\nErreur lors de l'examen surveill\u00e9",
    "\n      If you have disabilities,\n      you might be eligible for an additional time allowance on timed exams.\n      Ask your course team for information about additional time allowances.\n    ": "\n      Si vous avez des incapacit\u00e9s,\n      vous pouvez demander du temps suppl\u00e9mentaire.\n      Contactez l'\u00e9quipe du cours pour les demandes de temps suppl\u00e9mentaire.\n    ",
    "\n      If you have questions about the status of your proctored exam results, contact %(platform_name)s Support.\n    ": "\n      Si vous avez des questions \u00e0 propos du statut de votre examen surveill\u00e9, contactez le support %(platform_name)s.\n    ",
    "\n      The due date for this exam has passed\n    ": "\n      La date limite pour cet examen est pass\u00e9e\n    ",
    "\n      This exam is proctored\n    ": "\nCet examen est surveill\u00e9",
    "\n      To view your exam questions and responses, select <strong>View my exam</strong>. The exam's review status is shown in the left navigation pane.\n    ": "\n      Pour voir votre examen et vos r\u00e9ponses, cliquez sur <strong>Voir mon examen</strong>. Le statut de la revue de l'examen est disponible dans le menu de gauche.\n    ",
    "\n      Yes, submit my timed exam.\n    ": "\nOui, soumettre cet examen \u00e0 temps limit\u00e9.",
    "\n      You have submitted this proctored exam for review\n    ": "\n      Vous avez envoyer votre examen surveill\u00e9 pour \u00e9valuation\n    ",
    "\n      Your practice proctoring results: <b class=\"failure\"> Unsatisfactory </b>\n    ": "\n     Vos r\u00e9sultats d'examen surveill\u00e9 d'entrainement: <b class=\"failure\"> \u00c9chec </b>\n    ",
    "\n    %(exam_name)s is a Timed Exam (%(total_time)s)\n    ": "\n    %(exam_name)s est un examen minut\u00e9 (%(total_time)s)\n    ",
    "\n    You did not satisfy the following prerequisites:\n    ": "\nVous n'avez pas satisfait les pr\u00e9requis suivants:",
    " From this point in time, you must follow the <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">online proctoring rules</a> to pass the proctoring review for your exam. ": " A ce stade vous devez suivre les <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">r\u00e9gles de surveillance</a> pour satisfaire les revues de votre examen surveill\u00e9. ",
    " Your Proctoring Session Has Started ": "Votre session d'examen surveill\u00e9 a d\u00e9marr\u00e9",
    " and {num_of_minutes} minute": "et {num_of_minutes} minute",
    " and {num_of_minutes} minutes": "et  {num_of_minutes} minutes",
    " to complete and submit the exam.": "pour compl\u00e9ter et soumettre l'examen.",
    "%(providerName)s account": "compte de %(providerName)s",
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9",
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9s",
      ""
    ],
    "(required):": "(requis):",
    "6 a.m.": "6:00",
    "6 p.m.": "18:00",
    "Additional Time (minutes)": "Temps additionnel (minutes)",
    "After you select ": "Apr\u00e8s avoir choisi",
    "All Unreviewed": "Tous les non-revus",
    "All Unreviewed Failures": "Tous les \u00e9checs non-revus",
    "April": "Avril",
    "Are you sure you want to update flag as it will not be reverted again.": "Voulez-vous vraiment mettre \u00e0 jour l\u2019indicateur car cela ne sera pas annul\u00e9 ensuite\u202f?",
    "Assessment": "\u00c9valuation",
    "Assessments": "\u00c9valuations",
    "August": "Ao\u00fbt",
    "Available %s": "%s disponible(s)",
    "Back to Full List": "Retour \u00e0 la liste compl\u00e8te",
    "Block data would be sent to server for translations": "Les donn\u00e9es de bloc seraient envoy\u00e9es au serveur pour les traductions",
    "Block data would not be sent to server for translations": "Les donn\u00e9es de bloc ne seraient pas envoy\u00e9es au serveur pour les traductions",
    "Block view is unavailable": "La vue du block n'est pas disponible",
    "Can I request additional time to complete my exam?": "Puis-je demander un temps additionnel pour compl\u00e9ter mon examen ?",
    "Cancel": "Annuler",
    "Change can not be reverted.": "Le changement ne peut pas \u00eatre annul\u00e9.",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "Les modifications apport\u00e9es \u00e0 des \u00e9tapes qui ne sont pas s\u00e9lectionn\u00e9s comme parties prenantes du devoir ne seront pas sauvegard\u00e9s.",
    "Choose": "Choisir",
    "Choose a Date": "Choisir une date",
    "Choose a Time": "Choisir une heure",
    "Choose a time": "Choisir une heure",
    "Choose all": "Tout choisir",
    "Chosen %s": "Choix des \u00ab\u00a0%s \u00bb",
    "Click to choose all %s at once.": "Cliquez pour choisir tous les \u00ab\u00a0%s\u00a0\u00bb en une seule op\u00e9ration.",
    "Click to remove all chosen %s at once.": "Cliquez pour enlever tous les \u00ab\u00a0%s\u00a0\u00bb en une seule op\u00e9ration.",
    "Close": "Fermer",
    "Continue Editing": "Continuer la modification",
    "Continue Exam Without Proctoring": "Continuer l'examen sans surveilance",
    "Continue to my practice exam": "Continuer mon examen d'essai",
    "Could not retrieve download url.": "Impossible de r\u00e9cup\u00e9rer l'url  de t\u00e9l\u00e9chargement.",
    "Could not retrieve upload url.": "Impossible de r\u00e9cup\u00e9rer l'URL de t\u00e9l\u00e9versement.",
    "Couldn't Save This Assignment": "Impossible de sauvegarder ce devoir",
    "Course Blocks mapping": "Correspondance des blocs de cours",
    "Course Id": "ID de Cours",
    "Created": "Cr\u00e9\u00e9",
    "Criterion Added": "Crit\u00e8re ajout\u00e9",
    "Criterion Deleted": "Crit\u00e8re supprim\u00e9",
    "December": "D\u00e9cembre",
    "Declined": "Refus\u00e9",
    "Describe ": "D\u00e9crire",
    "Disable Translations": "D\u00e9sactiver les traductions",
    "Disable Translations for this block?": "D\u00e9sactiver les traductions pour ce bloc\u202f?",
    "Download Software Clicked": "T\u00e9l\u00e9chargement du logiciel demand\u00e9e",
    "Edit on Base Course Block?": "Modifier sur le bloc de cours de base\u202f?",
    "Edit on Translated rerun?": "Modifier sur la r\u00e9ex\u00e9cution traduite\u202f?",
    "Enable Translations": "Activer les traductions",
    "Enable Translations for this block?": "Activer les traductions pour ce bloc\u202f?",
    "Error": "Erreur",
    "Error getting the number of ungraded responses": "Erreur lors de la r\u00e9cup\u00e9ration du nombre de r\u00e9ponses non \u00e9valu\u00e9es",
    "Failed Proctoring": "Echec de l'Examen Surveill\u00e9",
    "February": "F\u00e9vrier",
    "Feedback available for selection.": "Feedback disponible pour la s\u00e9lection.",
    "File types can not be empty.": "Les types de fichier ne peuvent \u00eatre vides.",
    "Filter": "Filtrer",
    "Final Grade Received": "Note finale obtenue",
    "Go Back": "Retour",
    "Heading 3": "Ent\u00eate 3",
    "Heading 4": "Titre 4",
    "Heading 5": "Titre 5",
    "Heading 6": "Titre 6",
    "Hide": "Masquer",
    "I am ready to start this timed exam,": "Je suis pr\u00eat \u00e0 d\u00e9marrer cet examen \u00e0 temps limit\u00e9,",
    "If you edit base block content all linked translated-rerun blocks translations will be lost and all previous version history will be deleted.": "Si vous modifiez le contenu du bloc de base, toutes les traductions li\u00e9es des blocs r\u00e9ex\u00e9cut\u00e9s-traduits seront perdues et tout l\u2019historique des versions pr\u00e9c\u00e9dentes sera supprim\u00e9.",
    "If you leave this page without saving or submitting your response, you will lose any work you have done on the response.": "Si vous quittez cette page sans la sauvegarder ou soumettre votre r\u00e9ponse, vous perdrez tout le travail r\u00e9alis\u00e9 pour cette r\u00e9ponse.",
    "If you leave this page without submitting your peer assessment, you will lose any work you have done.": "Si vous quittez cette page sans envoyer votre \u00e9valuation par les pairs, vous perdrez tout le travail r\u00e9alis\u00e9.",
    "If you leave this page without submitting your self assessment, you will lose any work you have done.": "Si vous quittez cette page sans envoyer votre auto-\u00e9valuation, vous perdrez tout le travail r\u00e9alis\u00e9.",
    "If you leave this page without submitting your staff assessment, you will lose any work you have done.": "Si vous quittez cette page sans envoyer votre \u00e9valuation par l'\u00e9quipe p\u00e9dagogique, vous perdrez tout le travail r\u00e9alis\u00e9.",
    "Is Sample Attempt": "Est une tentative d'essai",
    "January": "Janvier",
    "July": "Juillet",
    "June": "Juin",
    "List of Open Assessments is unavailable": "La list des questions ouvertes n'est pas disponible",
    "Map blocks": "Blocs de carte",
    "Mapping Blocks": "Cartographier les blocs",
    "March": "Mars",
    "May": "Mai",
    "Midnight": "Minuit",
    "Must be a Staff User to Perform this request.": "Vous devez \u00eatre un utilisateur du type Enseignant pour faire cette requ\u00eate.",
    "Noon": "Midi",
    "Not Selected": "Non s\u00e9lectionn\u00e9",
    "Note that any linked translated rerun blocks mapping will be lost.": "Notez que toute correspondance des blocs de r\u00e9ex\u00e9cution traduits li\u00e9s sera perdue.",
    "Note: You are %s hour ahead of server time.": [
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heure.",
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heures.",
      ""
    ],
    "Note: You are %s hour behind server time.": [
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heure.",
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heures.",
      ""
    ],
    "November": "Novembre",
    "Now": "Maintenant",
    "October": "Octobre",
    "One or more rescheduling tasks failed.": "Une ou plusieurs t\u00e2ches de r\u00e9\u00e9chelonnement ont \u00e9chou\u00e9.",
    "Option Deleted": "Option supprim\u00e9e",
    "Paragraph": "Paragraphe",
    "Passed Proctoring": "A pass\u00e9 l'examen surveill\u00e9.",
    "Peer": "Pair",
    "Pending Session Review": "En attente de la revue de la session.",
    "Please correct the outlined fields.": "Veuillez corriger s'il vous pla\u00eet les champs indiqu\u00e9s.",
    "Please disable translations after an edit, otherwise edited component will be overwritten by auto next applied translations.": "Veuillez d\u00e9sactiver les traductions apr\u00e8s une modification, sinon le composant modifi\u00e9 sera \u00e9cras\u00e9 par les prochaines traductions appliqu\u00e9es automatiquement.",
    "Please wait": " Veuillez patienter",
    "Practice Exam Completed": "Examen d'essai compl\u00e9t\u00e9",
    "Practice Exam Failed": "Examen d'essai \u00e9chou\u00e9",
    "Preformatted": "Pr\u00e9format\u00e9",
    "Proctored Option Available": "Option Examen Surveill\u00e9 Possible",
    "Proctored Option No Longer Available": "Option Examen Surveill\u00e9 Plus Disponible.",
    "Ready To Start": "Pr\u00eat \u00e0 Commencer",
    "Ready To Submit": "Pr\u00eat \u00e0 Soumettre",
    "Rejected": "Rejet\u00e9",
    "Remove": "Enlever",
    "Remove all": "Tout enlever",
    "Retry Verification": "R\u00e9essayer la v\u00e9rification",
    "Review Policy Exception": "Exception aux R\u00e8gles de Revues",
    "Saving...": "Enregistrement...",
    "Second Review Required": "Revue additionnelle requise",
    "Self": "Auto",
    "September": "Septembre",
    "Server error.": "Erreur serveur.",
    "Show": "Afficher",
    "Staff": "\u00c9quipe p\u00e9dagogique",
    "Start System Check": "D\u00e9marrer le diagnostique syst\u00e8me",
    "Started": "D\u00e9but\u00e9",
    "Status of Your Response": "Statut de votre r\u00e9ponse",
    "Submitted": "Soumis",
    "Take this exam without proctoring.": "Faire cette examen sans surveillance.",
    "Taking As Open Exam": "Prendre comme session libre.",
    "Taking As Proctored Exam": "Faire en tant qu'examen surveill\u00e9",
    "Taking as Proctored": "Faire sous surveillance",
    "The display of ungraded and checked out responses could not be loaded.": "L'affichage des r\u00e9ponses non not\u00e9es n'a pas pu \u00eatre charg\u00e9.",
    "The following file types are not allowed: ": "Les types de fichiers suivants ne sont pas support\u00e9s :",
    "The server could not be contacted.": "Le serveur n'a pas pu \u00eatre contact\u00e9.",
    "The staff assessment form could not be loaded.": "Le formulaire d'\u00e9valuation de l'\u00e9quipe p\u00e9dagogique n'a pas pu \u00eatre charg\u00e9.",
    "The submission could not be removed from the grading pool.": "La soumission n'a pas pu \u00eatre retir\u00e9e du groupe de notation.",
    "This assessment could not be submitted.": "Cette \u00e9valuation n'a pas pu \u00eatre soumise.",
    "This exam has a time limit associated with it.": "Cet examen est \u00e0 temps limit\u00e9",
    "This feedback could not be submitted.": "Ce commentaire n'a pas pu \u00eatre soumis.",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Ceci est une liste des \u00ab\u00a0%s\u00a0\u00bb disponibles. Vous pouvez en choisir en les s\u00e9lectionnant dans la zone ci-dessous, puis en cliquant sur la fl\u00e8che \u00ab\u00a0Choisir\u00a0\u00bb entre les deux zones.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Ceci est la liste des \u00ab\u00a0%s\u00a0\u00bb choisi(e)s. Vous pouvez en enlever en les s\u00e9lectionnant dans la zone ci-dessous, puis en cliquant sur la fl\u00e8che \u00ab Enlever \u00bb entre les deux zones.",
    "This problem could not be saved.": "Ce probl\u00e8me n'a pas pu \u00eatre enregistr\u00e9.",
    "This problem has already been released. Any changes will apply only to future assessments.": "Ce probl\u00e8me a d\u00e9j\u00e0 \u00e9t\u00e9 publi\u00e9. Tout changement s'appliquera seulement aux futures \u00e9valuations.",
    "This response could not be saved.": "Cette r\u00e9ponse n'a pas pu \u00eatre enregistr\u00e9e.",
    "This response could not be submitted.": "Cette r\u00e9ponse n'a pas pu \u00eatre soumise.",
    "This response has been saved but not submitted.": "Cette r\u00e9ponse a \u00e9t\u00e9 enregistr\u00e9e mais n'a pas \u00e9t\u00e9 soumise.",
    "This response has not been saved.": "Cette r\u00e9ponse n'a pas \u00e9t\u00e9 enregistr\u00e9e.",
    "This section could not be loaded.": "Cette section n'a pas pu \u00eatre charg\u00e9e.",
    "Thumbnail view of ": "Aper\u00e7u de ",
    "Timed Exam": "Examen minut\u00e9",
    "Timed Out": "Temps \u00e9coul\u00e9",
    "To pass this exam, you must complete the problems in the time allowed.": "Pour r\u00e9ussir l'examen, vous devez r\u00e9pondre aux questions dans le temps imparti.",
    "Today": "Aujourd'hui",
    "Tomorrow": "Demain",
    "Total Responses": "R\u00e9ponses total",
    "Training": "Entrainement",
    "Type into this box to filter down the list of available %s.": "\u00c9crivez dans cette zone pour filtrer la liste des \u00ab\u00a0%s\u00a0\u00bb disponibles.",
    "Unable to load": "Chargement impossible",
    "Unexpected server error.": "Erreur serveur inattendue. ",
    "Ungraded Practice Exam": "Examen d'entrainement non not\u00e9",
    "Unit Name": "Nom de l'unit\u00e9",
    "Units": "Unit\u00e9s",
    "Unnamed Option": "Option sans nom",
    "Updating": "Mise \u00e0 jour en cours",
    "Verified": "V\u00e9rifi\u00e9",
    "View my exam": "Voir mon examen",
    "Waiting": "En attente",
    "Warning": "Attention",
    "Yes, Disable Translations": "Oui, d\u00e9sactiver les traductions",
    "Yes, Enable Translations": "Oui, activer les traductions",
    "Yes, Update Flag": "Oui, mettre \u00e0 jour l\u2019indicateur",
    "Yesterday": "Hier",
    "You have added a criterion. You will need to select an option for the criterion in the Learner Training step. To do this, click the Settings tab.": "Vous avez ajout\u00e9 un crit\u00e8re. Vous devez s\u00e9lectionner une option pour ce crit\u00e8re dans cette \u00e9tape de Formation de l'Etudiant. Pour cela, cliquez sur l'onglet Param\u00e8tres.",
    "You have deleted a criterion. The criterion has been removed from the example responses in the Learner Training step.": "Vous avez supprim\u00e9 un crit\u00e8re. Le crit\u00e8re a \u00e9t\u00e9 supprim\u00e9 des crit\u00e8res des exemples de r\u00e9ponses de cette \u00e9tape la formation de l'\u00e9tudiant.",
    "You have deleted all the options for this criterion. The criterion has been removed from the sample responses in the Learner Training step.": "Vous avez supprim\u00e9 toutes les options pour ce crit\u00e8re. Le crit\u00e8re a \u00e9t\u00e9 supprim\u00e9 des crit\u00e8res des exemples de r\u00e9ponses de cette \u00e9tape la Formation de l'Etudiant.",
    "You have deleted an option. That option has been removed from its criterion in the sample responses in the Learner Training step. You might have to select a new option for the criterion.": "Vous avez supprim\u00e9 une option. Cette option a \u00e9t\u00e9 supprim\u00e9e des crit\u00e8res des exemples de r\u00e9ponses de cette \u00e9tape la Formation de l'Etudiant. Vous pourriez avoir \u00e0 s\u00e9lectionner une nouvelle option pour le crit\u00e8re.",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Vous avez s\u00e9lectionn\u00e9 une action, et vous n'avez fait aucune modification sur des champs. Vous cherchez probablement le bouton Envoyer et non le bouton Enregistrer.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Vous avez s\u00e9lectionn\u00e9 une action, mais vous n'avez pas encore sauvegard\u00e9 certains champs modifi\u00e9s. Cliquez sur OK pour sauver. Vous devrez r\u00e9appliquer l'action.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Vous avez des modifications non sauvegard\u00e9es sur certains champs \u00e9ditables. Si vous lancez une action, ces modifications vont \u00eatre perdues.",
    "You must provide a learner name.": "Vous devez saisir un nom d'apprenant.",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "Vous \u00eates sur le point d'envoyer votre r\u00e9ponse d\u00e9finitive. Apr\u00e8s cette \u00e9tape vous ne pourrez plus la modifier ou en soumettre une nouvelle.",
    "Your file ": "Votre fichier",
    "active proctored exams": "Les examens surveill\u00e9s actifs",
    "could not determine the course_id": "ne peut d\u00e9terminer l'identifiant du cours - course_id",
    "courses with active proctored exams": "les cours avec des examens surveill\u00e9s actifs",
    "internally reviewed": "revue interne",
    "one letter Friday\u0004F": "V",
    "one letter Monday\u0004M": "L",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "D",
    "one letter Thursday\u0004T": "J",
    "one letter Tuesday\u0004T": "M",
    "one letter Wednesday\u0004W": "M",
    "you have less than a minute remaining": "vous avez moins d'une minute restante",
    "you have {remaining_time} remaining": "vous avez {remaining_time} restant",
    "you will have ": "vous aurez",
    "your course": "votre cours",
    "{num_of_hours} hour": "{num_of_hours} heure",
    "{num_of_hours} hours": "{num_of_hours} heures",
    "{num_of_minutes} minute": "{num_of_minutes} minute",
    "{num_of_minutes} minutes": "{num_of_minutes} minutes"
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
    "DATETIME_FORMAT": "j F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%Y",
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%Y",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j F Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j N Y H:i",
    "SHORT_DATE_FORMAT": "j N Y",
    "THOUSAND_SEPARATOR": "\u00a0",
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

