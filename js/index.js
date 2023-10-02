// varibles that will be used as functions of the quiz
// const timer = docment.querySelector('.timer');
const questionTitle = document.querySelector('.question-title');
const questionChoices = document.querySelector('.choices');
const choiceA = document.querySelector('.choiceA');
const choiceB = document.querySelector('.choiceB');
const choiceC = document.querySelector('.choiceC');
const choiceD = document.querySelector('.choiceD');
const startBtn = document.querySelector('.start-btn');
const nextBtn = document.querySelector('.nextBtn');
const submitBtn = document.querySelector('.submitBtn');


let time; // time variable for the timer that will be used to set the timer
let score; // score variable that will be used to set the score

const startQuiz = () => {
  console.log('start quiz');
};

startBtn.addEventListener('click', startQuiz);
