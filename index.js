Survey
    .StylesManager
    .applyTheme("default");

var json = {
    showQuestionNumbers: "off",
    questions: [
        {
            //First Question
            type: "radiogroup",
            name: "crime",
            title: "Was it sexual misconduct or discrimination?",
            isRequired: true,
            choices: [
                "Sexual Misconduct", "Discrimination"
            ],
            colCount: 0
        }, {
            //Sexual Misconduct
            type: "radiogroup",
            name: "confidential",
            title: "Would you like the incident to remain confidential?",
            visibleIf: "{crime}= 'Sexual Misconduct'",
            isRequired: true,
            choices: ["Yes", "No"]
        }, {
            //Sexual Misconduct; Condfidential
            type: "radiogroup",
            name: "confidentialSources",
            title: "UHS, CMH, Advocates, IVPS",
            visibleIf: "{confidential}= 'Yes'",
            isRequired: true,
            choices: ["Yes", "No"]
        }, {
            //Sexual Misconduct; Not Confidential
            type: "radiogroup",
            name: "student",
            title: "Was the offender a student?",
            visibleIf: "{confidential}= 'No'",
            isRequired: true,
            choices: ["Yes", "No"]
        }, {
            //Sexual Misconduct; Not Confidential; Student
            type: "radiogroup",
            name: "result",
            title: "Title IX",
            visibleIf: "{student}= 'Yes",
            isRequired: true,
            startWithNewLine: false,
            choices: ["Yes", "No"]
        }, {
    //        type: "dropdown",
    //        name: "kid4Age",
    //        title: "The fourth kid age:",
    //        visibleIf: "{haveKids}='Yes' and {kids} >= 4",
    //        isRequired: true,
    //        startWithNewLine: false,
    //        "choicesMax": 18
    //    }, {
    //        type: "dropdown",
     //       name: "kid5Age",
      //      title: "The fifth kid age:",
      //      visibleIf: "{haveKids}='Yes' and {kids} >= 5",
      //      isRequired: true,
      //      startWithNewLine: false,
      //      "choicesMax": 18
            
              }, {
            //Discrimination
            type: "radiogroup",
            name: "discrimination",
            title: "The fifth kid age:",
            visibleIf: "{crime}='Discrimination'",
            isRequired: true,
            startWithNewLine: false,
            "choicesMax": ["test"]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));
