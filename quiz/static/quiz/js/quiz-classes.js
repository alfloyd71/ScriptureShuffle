class QuizInstance{
 constructor(){
   this.questions = document.querySelectorAll('.questions-test')
   this.answers = document.querySelectorAll(".form-answers"); // Adjust the selector if needed
   this.selections = document.querySelectorAll('.form-check-input')
   this.formCheck = document.querySelectorAll('.form-check')
   this.multipleChoiceQuiz=document.querySelector('#form-multiple-choice-quiz')
   this.timer=document.querySelector('#display-timer')
   this.inputTimer = document.querySelector('#timer')
   this.seconds = 0;
   this.timerInterval;
 }
}