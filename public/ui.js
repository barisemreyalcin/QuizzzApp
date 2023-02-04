function UI () {
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.btn_restart = document.querySelector(".btn_restart"),
    this.btn_finish = document.querySelector(".btn_finish"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`,
    this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`,
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line")
}

UI.prototype.displayQuestion = function(question) {
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
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    } 
}

UI.prototype.displayQuestionNo = function(questionOrder, questionTotal) {
    let tag = `<span class="badge bg-warning">${questionOrder} / ${questionTotal}</span>`
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.displayScore = function(questionTotal, correctAnswerNo) {
    let tag = `${correctAnswerNo} correct answers out of ${questionTotal} questions`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}