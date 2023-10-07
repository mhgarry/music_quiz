// constant variables to be used in quiz application
const startBtn = document.querySelector('.start-btn');
const timeDisplay = document.querySelector('.timer');
const questionTitles = document.querySelector('.question-title');
const theQuiz = document.querySelector('.quiz-container')
const questionChoices = document.querySelector('.choices');
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

// function to show questions and choices 
const showQuestions = () => {
  //sets current question title
  const currentQuestion = questions[currentQuestionIndex].question;
  //sets choice variables
  const choiceA = questions[currentQuestionIndex].answers.A;
  const choiceB = questions[currentQuestionIndex].answers.B;
  const choiceC = questions[currentQuestionIndex].answers.C;
  const choiceD = questions[currentQuestionIndex].answers.D;

  // loops through questions array and displays current question and choices
  for (let i = 0; i < questions.length; i++) {
    questionTitles.innerText = currentQuestion;
    questionChoices.innerHTML = `<button>${choiceA}</button>
    <button>${choiceB}</button>
    <button>${choiceC}</button>
    <button>${choiceD}</button>`;

  }};

  startBtn.addEventListener('click', () => {});

