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
    new Question("2- Which one is .NET Package Management application?", {A: "Node.js", B: "npm", C: "NuGet", D: "PHP"}, "C")
];

function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.bringQuestion = function() {
    return this.questions[this.questionIndex];
}

const quiz = new Quiz(questions);


document.querySelector(".btn_start").addEventListener("click", function() {
    
    document.querySelector(".quiz_box").classList.add("active");
        displayQuestion(quiz.bringQuestion());

})

document.querySelector(".next_btn").addEventListener("click", function() {
    if(quiz.questions.length != quiz.questionIndex +1) {
        quiz.questionIndex +=1;
        displayQuestion(quiz.bringQuestion());
    } else {
        console.log("Questions are over");
    }
});

function displayQuestion(question) {
    let dispQuestion = `<span>${question.questionText}</span>`
    let options = "";

    for (let answer in question.answerChoices) {
        options +=
        `
            <div class="option">
                <span><b>${answer})</b> ${question.answerChoices[answer]}</span>
            </div>
        `
    }

    document.querySelector(".question_text").innerHTML = dispQuestion;
    document.querySelector(".option_list").innerHTML = options;
}