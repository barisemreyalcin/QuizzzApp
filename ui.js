function UI () {
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`,
    this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`
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