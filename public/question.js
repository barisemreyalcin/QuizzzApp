function Question(questionText, answerChoices, answerCorrect) {
    this.questionText = questionText;
    this.answerChoices = answerChoices;
    this.answerCorrect = answerCorrect;
}

Question.prototype.answerCheck = function(answer) {
    return answer === this.answerCorrect;
}

let questions = [
    new Question("1- Which one is JavaScript Package Management application?", {A: "Node.js", B: "npm", C: "TypeScript", D: "PHP"}, "B"),
    new Question("2- Which one is .NET Package Management application?", {A: "Node.js", B: "npm", C: "NuGet", D: "PHP"}, "C"),
    new Question("3- Which one is not a must for Frontend Development?", {A: "HTML", B: "Node.js", C: "CSS", D: "JavaScipt"}, "B"),
    new Question("4- Which one is a Javascript framework?", {A: "React", B: "SCSS", C: "ASP.NET", D: "Django"}, "A")
];