function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.correctAnswerNo = 0;
}

Quiz.prototype.bringQuestion = function() {
    return this.questions[this.questionIndex];
}
