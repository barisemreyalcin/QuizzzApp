const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    
    ui.quiz_box.classList.add("active");
    startTimer(15);
    startTimerLine();
    ui.displayQuestion(quiz.bringQuestion());
    ui.displayQuestionNo(quiz.questionIndex + 1, quiz.questions.length);

})

ui.btn_next.addEventListener("click", function() {
    if(quiz.questions.length != quiz.questionIndex +1) {
        quiz.questionIndex +=1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(15);
        startTimerLine();
        ui.displayQuestion(quiz.bringQuestion());
        ui.displayQuestionNo(quiz.questionIndex + 1, quiz.questions.length);
        ui.btn_next.classList.remove("show")
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.displayScore(quiz.questions.length, quiz.correctAnswerNo);
    }
});

ui.btn_finish.addEventListener("click", function() {
    window.location.reload();
});
ui.btn_restart.addEventListener("click", function() {
    quiz.questionIndex = 0;
    quiz.correctAnswerNo = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let answer = option.querySelector("span b").textContent;
    let question = quiz.bringQuestion();

    if(question.answerCheck(answer)) {
        quiz.correctAnswerNo += 1;
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

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;

        if(time < 0) {
            clearInterval(counter);

            ui.time_text.textContent = "Time is up";

            let answer = quiz.bringQuestion().answerCorrect;

            for(let option of ui.option_list.children) {

                if(option.querySelector("span b").textContent == answer) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            ui.btn_next.classList.add("show");
        } 
    }
}

let counterLine
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer, 10);

    function timer() {
        line_width += 0.375;
        ui.time_line.style.width = line_width + "px";
        
        if(line_width > 599) {
            clearInterval(counterLine);
        }
    }
}