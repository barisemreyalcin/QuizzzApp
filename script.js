const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    
   ui.quiz_box.classList.add("active");
    ui.displayQuestion(quiz.bringQuestion());
    ui.displayQuestionNo(quiz.questionIndex + 1, quiz.questions.length);

})

ui.btn_next.addEventListener("click", function() {
    if(quiz.questions.length != quiz.questionIndex +1) {
        quiz.questionIndex +=1;
        ui.displayQuestion(quiz.bringQuestion());
        ui.displayQuestionNo(quiz.questionIndex + 1, quiz.questions.length);
        ui.btn_next.classList.remove("show")
    } else {
        console.log("Questions are over");
    }
});

function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    let question = quiz.bringQuestion();

    if(question.answerCheck(answer)) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(i=0; i<ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show")
}