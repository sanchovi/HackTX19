
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
            title: "Campus Mental Health Center",
            visibleIf: "{confidential}= 'Yes'",
            isRequired: false,
            choices: ["null"]
        }, {
            //Sexual Misconduct; Not Confidential
            type: "radiogroup",
            name: "student",
            title: "Was the offender a student?",
            visibleIf: "{confidential}= 'No'",
            isRequired: true,
            choices: ["Yes", "No"]
        }, {
            // Sexual Misconduct; Not Confidential; Student
            type: "radiogroup",
            name: "result",
            title: "Title IX",
            visibleIf: "{student}= 'Yes'",
            isRequired: true,
            choices: ["Yes", "No"]
         }, {
            //Discrimination
            type: "radiogroup",
            name: "discrimination",
            title: "Office of Inclusivity and Equity",
            visibleIf: "{crime}='Discrimination'",
            isRequired: true,
            choices: ["Yes", "No"]
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

