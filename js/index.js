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
const countDown = document.querySelector('.timer');


// start quiz function
const startQuiz = () => {
  // start timer for quiz questions
  const startTimer = setInterval(() => {
    countDown.textContent--;
    if (countDown.textContent === '0') {
      clearInterval(startTimer);
    }
  }, 1000);
  
  // hide start button 
  startBtn.classList.add('hide');
  console.log('start quiz');
};

startBtn.addEventListener('click', startQuiz);
