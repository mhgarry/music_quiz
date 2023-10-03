// constant variables to be used in quiz application
const introText = document.querySelector('.word-container');
const startBtn = document.querySelector('.start-btn');
const timeDisplay = document.querySelector('.timer');
const questionTitles = document.querySelector('.question-title');
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
let time = 10;
// current score
let score = 0;

const quizStart = () => {
  
}

startBtn.addEventListener('click', () => {
  quizStart()
})