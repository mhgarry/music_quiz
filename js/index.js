// constant variables to be used in quiz application
const startBtn = document.querySelector('.start-btn');
const timeDisplay = document.querySelector('.timer');
const questionTitles = document.querySelector('.question-title');
const theQuiz = document.querySelector('.quiz-container')
const questionChoices = document.querySelector('.choices');
const choiceA = document.querySelector('.A');
const choiceB = document.querySelector('.B');
const choiceC = document.querySelector('.C');
const choiceD = document.querySelector('.D');
const submitBtn = document.querySelector('.submit-btn');
const nextBtn = document.querySelector('.next-btn');

//question index for array
const currentQuestionIndex = 0;
// starting score
let score = 0;

// initiate quiz and start functions
const init = () => {
  quizStart();
  startTimer();
  showQuestions();
};

startBtn.addEventListener('click', init); //runs init function on click

//start quiz and hide intro screen and show quiz screen
const quizStart = () => {
  startBtn.classList.add('hidden');
  theQuiz.classList.remove('hidden'); 
};

// function to start the timer when the quiz and each individual question starts
const startTimer = () => {
  let time = 10;
  
  let timer = setInterval(() => {
    time--;
    timeDisplay.innerText = time;
    if (time <= 0) {
      clearInterval(timer);

  }}, 1000) //timer points to setInterval function which counts time variable down from 10
};

// functoin to create title and choices display on quiz
const showQuestions = () => {
  // set the question to be displayed using question index
  const currentQuestionDisplay = questions[currentQuestionIndex];
  // show question title
  questionTitles.textContent = currentQuestionDisplay.question;
  // show answer choices
  choiceA.textContent = currentQuestionDisplay.answers.A;
  choiceB.textContent = currentQuestionDisplay.answers.B;
  choiceC.textContent = currentQuestionDisplay.answers.C;
  choiceD.textContent = currentQuestionDisplay.answers.D;
};

