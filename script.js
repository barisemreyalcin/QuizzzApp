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
    // document.querySelector(".next_btn").classList.remove("show")

})

document.querySelector(".next_btn").addEventListener("click", function() {
    if(quiz.questions.length != quiz.questionIndex +1) {
        quiz.questionIndex +=1;
        displayQuestion(quiz.bringQuestion());
        document.querySelector(".next_btn").classList.remove("show")
    } else {
        console.log("Questions are over");
    }
});

const option_list = document.querySelector(".option_list");
const correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`;
const incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`;

function displayQuestion(question) {
    let dispQuestion = `<span>${question.questionText}</span>`
    let options = "";

    for (let answer in question.answerChoices) {
        options +=
        `
            <div class="option">
                <span><b>${answer}</b><strong>)</strong> ${question.answerChoices[answer]}</span>
            </div>
        `
    }
    document.querySelector(".question_text").innerHTML = dispQuestion;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");

    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    } 
}

function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    let question = quiz.bringQuestion();

    if(question.answerCheck(answer)) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    for(i=0; i<option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }
    document.querySelector(".next_btn").classList.add("show")
}