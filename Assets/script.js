var startBtn = document.getElementById('startBtn');
var timeRemaining = 60; 
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
var timer = document.getElementById("countdown");
var quizCont = document.querySelector('.quizContainer');
var quizHeader = document.querySelector('.quizHeader');
var quizOutput = document.querySelector('.output');

startBtn.style.display = "none";
quizCont.style.display = 'block';
quizHeader.style.display = 'flex';
quizOutput.style.display = 'block';

function endQuiz() {
    clearInterval(timerInterval);
    quizCont.style.display = "none";
  quizOutput.style.display = "block";
  quizOutput.textContent = "Your score is " + score + "/" + quizQuestions.length;
}

var timerInterval = setInterval(function() {
    timeRemaining--;
    timer.textContent = timeRemaining + " seconds left";

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}


