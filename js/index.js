// constant variables to be used in quiz application
const introText = document.querySelector('.word-container');
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

// current question index
let currentQuestion = 0;
// current time
// current score
let score = 0;

// const startTimer = () => {
//  let time = 10;
//  time = setInterval(() => {
//   time --
//  }, 1000)
//  if (time <=0 ) {
//   clearInterval(time)
//  }
// }

//start quiz and hide intro screen and show quiz screen
const quizStart = () => {
  startBtn.classList.add('hidden');
  introText.classList.add('hidden');
  theQuiz.classList.remove('hidden');
  startTimer();
};

startBtn.addEventListener('click', () => {
  quizStart()
});