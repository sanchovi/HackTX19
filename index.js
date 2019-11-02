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
            name: "student",
            title: "Was the offender a student?",
            visibleIf: "{crime}='Sexual Misconduct'",
            isRequired: true,
            choices: ["Yes", "No"]
        }, {
            //Sexual Misconduct; Student
            type: "radiogroup",
            name: "studentOffender",
            title: "Would you like the incident to remain confidential?",
            visibleIf: "{student}= 'Yes'",
            isRequired: true,
            choices: ["Yes", "No"]
        }, {
            type: "dropdown",
            name: "kid2Age",
            title: "The second kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 2",
            isRequired: true,
            startWithNewLine: false,
            "choicesMax": 18
        }, {
            type: "dropdown",
            name: "kid3Age",
            title: "The third kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 3",
            isRequired: true,
            startWithNewLine: false,
            "choicesMax": 18
        }, {
            type: "dropdown",
            name: "kid4Age",
            title: "The fourth kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 4",
            isRequired: true,
            startWithNewLine: false,
            "choicesMax": 18
        }, {
            type: "dropdown",
            name: "kid5Age",
            title: "The fifth kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 5",
            isRequired: true,
            startWithNewLine: false,
            "choicesMax": 18
            
            //Discrimination
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
