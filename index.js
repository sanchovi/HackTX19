Survey
    .StylesManager
    .applyTheme("default");

var json = {
    showQuestionNumbers: "off",
    questions: [
        {
          "type": "radiogroup",
     "name": "crime",
     "title": "What type of incident was this?",
     "choices": [
      {
       "value": "misconduct",
       "text": "Sexual Misconduct"
      },
      {
       "value": "discrimination",
       "text": "Discrimination"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "confidential",
     "visibleIf": "{crime} = \"misconduct\"",
     "title": "Would you like to remain confidential?",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "confidentialResources",
     "visibleIf": "{confidential} = \"yes\"",
     "title": "Confidential Resources Available",
     "columns": [
      "Description",
      "Contact"
     ],
     "rows": [
      {
       "value": "cmhc",
       "text": "Campus Mental Health Center"
      },
      {
       "value": "uhs",
       "text": "University Health Services"
      },
      {
       "value": "utad",
       "text": "UT Advocates"
      },
      {
       "value": "ivps",
       "text": "Interpersonal Violence Peer Support"
      }
     ],
     "cells": {
      "cmhc": {
       "Description": "Talk to a licensed professional and get connected to mental health resources",
       "Contact": "NUMBER"
      },
      "uhs": {
       "Description": "Recieve confidential medical screenings",
       "Contact": "NUMBER"
      },
      "utad": {
       "Description": "Speak with a licensed professional about general concerns",
       "Contact": "NUMBER"
      },
      "ivps": {
       "Description": "Speak with a trained peer and get connected to resources",
       "Contact": "NUMBER"
      }
     }
    },
    {
     "type": "radiogroup",
     "name": "studentOffense",
     "visibleIf": "{confidential} = \"no\"",
     "title": "Was the offender a student?",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "dicriminationResources",
     "visibleIf": "{crime} = \"discrimination\"",
     "title": "Discrimination Resources",
     "columns": [
      "Description",
      "Contact"
     ],
     "rows": [
      {
       "value": "oie",
       "text": "Office of Inclusion and Equity"
      }
     ],
     "cells": {
      "oie": {
       "Description": "Report discrimination based on age, gender pregnancy, veteran status etc",
       "Contact": "NUMBER"
      }
     }
    },
    {
     "type": "matrix",
     "name": "studentOffenseResources",
     "visibleIf": "{studentOffense} = \"yes\"",
     "title": "Student Offense Resources",
     "columns": [
      "Description",
      "Contact"
     ],
     "rows": [
      {
       "value": "titleix",
       "text": "Title IX Office"
      }
     ],
     "cells": {
      "titleix": {
       "Description": "Report discrimination based on age, gender pregnancy, veteran status etc",
       "Contact": "NUMBER"
      }
     }
    }
   ]
  }
 ],
    ]
};



//Survey
//     .StylesManager
//     .applyTheme("default");

// var json = {
//     showQuestionNumbers: "off",
//     questions: [
//         {
//             //First Question
//             type: "radiogroup",
//             name: "crime",
//             title: "Was it sexual misconduct or discrimination?",
//             isRequired: true,
//             choices: [
//                 "Sexual Misconduct", "Discrimination"
//             ],
//             colCount: 0
//         }, {
//             //Sexual Misconduct
//             type: "radiogroup",
//             name: "confidential",
//             title: "Would you like the incident to remain confidential?",
//             visibleIf: "{crime}= 'Sexual Misconduct'",
//             isRequired: true,
//             choices: ["Yes", "No"]
//         }, {
//             //Sexual Misconduct; Condfidential
//             type: "radiogroup",
//             name: "confidentialSources",
//             title: "UHS, CMH, Advocates, IVPS",
//             title: "Campus Mental Health Center",
//             visibleIf: "{confidential}= 'Yes'",
//             isRequired: false,
//             choices: ["null"]
//         }, {
//             //Sexual Misconduct; Not Confidential
//             type: "radiogroup",
//             name: "student",
//             title: "Was the offender a student?",
//             visibleIf: "{confidential}= 'No'",
//             isRequired: true,
//             choices: ["Yes", "No"]
//         }, {
//             // Sexual Misconduct; Not Confidential; Student
//             type: "radiogroup",
//             name: "result",
//             title: "Title IX",
//             visibleIf: "{student}= 'Yes'",
//             isRequired: true,
//             choices: ["Yes", "No"]
//          }, {
//             //Discrimination
//             type: "radiogroup",
//             name: "discrimination",
//             title: "Office of Inclusivity and Equity",
//             visibleIf: "{crime}='Discrimination'",
//             isRequired: true,
//             choices: ["Yes", "No"]
//         }
//     ]
// };

// window.survey = new Survey.Model(json);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//     });

// ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));
