// TODO MAKE ANSWERS CLICKABLE
//        - answer choices need to also display wether the choice is correct or incorrect
// TODO Make View Highscores Page Viewable
//        - needs to be able to store scores in local storage
//event delegation:
//add a single click event handler
//use data attributes
//event.target.dataset


// ----------------- LIGHTS ---------------------- //
// ----------------- Global ---------------------- //
var time = 60;
var currentQuestionIndex = 0;
var startBttn = document.getElementById('startBtn');
var quizIntro = document.querySelector('header.quizIntro')
var choicesList = document.getElementById("choices");
choicesList.innerHTML = "";
// ----------------- Global ---------------------- //
// ----------------- Questions ---------------------- //
var quizQuestions = [
    {
      question: "What is javascript?",
      choices: [
        "An Object Oriented Programming language",
        "A script about coffee",
        "The samething as Java",
        "A stylesheet"
      ],
      answer: "An Object Oriented Programming language"
    },
    {
      question: "What are these examples of? href, data, link, class and id",
      choices: ["Elements", "Attributes", "Events", "Strings"],
      answer: "Attributes"
    },
    {
      question: "What is an Object?",
      choices: ["An element", "Something with Properties", "A function", "A Selector"],
      answer: "Something with Properties"
    }

  ];
// ----------------- Questions ---------------------- //
// ----------------- LIGHTS ---------------------- //



// ----------------- CAMERA ---------------------- //
function startQuiz() {
 
    var questionBoxx = document.getElementById('questionBox');
    var topBar = document.getElementById('topBar');
    topBar.style.display = 'block'
    questionBoxx.style.display = 'block'
    quizIntro.style.display = "none";
    timer()
    displayQuestion();
    displayChoices();
      
}


// ------- Answer selection --------- //
// TODO function needs to display wether the answer is correct or incorrect
// TODO also needs to decrement time when ever the answer is incorrect
// TODO pulls the next question in the array


function answerSelector(event) {
  var selectedChoice = event.target;
  var currentQuestion = quizQuestions[currentQuestionIndex];
  var correctAnswer = currentQuestion.answer;

  // check if the selected choice is correct
  if (selectedChoice.textContent === correctAnswer) {
    // set the background color of the button to green
    selectedChoice.style.backgroundColor = "blue";
    
    // display "Correct!" next to the button
    var correctMsg = document.getElementById("span");
    correctMsg.textContent = "Correct!";

    selectedChoice.parentNode.insertBefore(correctMsg, selectedChoice.nextSibling);

    // move on to the next question after a brief pause
  }  else {
    // set the background color of the button to red
    selectedChoice.style.backgroundColor = 'red';
    // display "Incorrect!" next to the button
    var incorrectMsg = document.getElementById("span");
    incorrectMsg.textContent = "Incorrect!";
  selectedChoice.parentNode.insertBefore(incorrectMsg, selectedChoice.nextSibling);


  }
}
// ------- Answer selection --------- //



// ------- View Highscores  --------- //
// TODO needs to bring up Highscores
// TODO needs to store input into local storage

function checkHighScore() {

}
// ------- View Highscores  --------- //

// ------- End The Quiz  --------- //
// TODO ends quiz and shows finished Box
// TODO when timer runs out, ends quiz
function endQuiz () {
}
// ------- End The Quiz  --------- //


/* ----------- DISPLAY QUESTIONS BOX ----------------- */
function displayQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
}
/* ----------- DISPLAY QUESTIONS BOX ----------------- */

/* ----------- DISPLAY ANSWER CHOICES ----------------- */
function displayChoices() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choiceElement = document.createElement("button");
      choiceElement.textContent = currentQuestion.choices[i];
      choicesList.appendChild(choiceElement);
    }
}
/* ----------- DISPLAY ANSWER CHOICES ----------------- */

/* ----------- TIMER ----------------- */
function timer () {
    var timer = document.getElementById('timer')
    var timeRemaining = 60;
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timer.textContent = timeRemaining + ' Seconds Left';
    
        if (timeRemaining <= 0) {
          clearInterval(timerInterval);
          endQuiz();
        }
      }, 1000);
    }

// ----------- TIMER ----------------- //
// ----------------- CAMERA ---------------------- //


// ----------------- ACTION! ---------------------- //
startBttn.addEventListener('click', startQuiz);
choicesList.addEventListener('click', answerSelector);



// ----------------- ACTION! ---------------------- //
