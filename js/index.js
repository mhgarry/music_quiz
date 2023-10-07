// constant variables to be used in quiz application
const startBtn = document.querySelector('.start-btn');
const timeDisplay = document.querySelector('.timer');
const questionTitles = document.querySelector('.question-title');
const theQuiz = document.querySelector('.quiz-container')
const questionChoices = document.querySelector('.choices');


//question index for array
let currentQuestionIndex = 0;
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
  const A = questions[currentQuestionIndex].answers.A;
  const B = questions[currentQuestionIndex].answers.B;
  const C = questions[currentQuestionIndex].answers.C;
  const D = questions[currentQuestionIndex].answers.D;
  //sets current question title and choices
  questionTitles.innerText = currentQuestion;
  questionChoices.innerHTML =   
 `<button>${A}</button>
  <button>${B}</button>
  <button>${C}</button>
  <button>${D}</button>`;
  const correctAnswer = questions[currentQuestionIndex].answer;
};

// function to check if answer is correct
const showNextQuestion = () => {
  currentQuestionIndex++;
  showQuestions();
};

const checkAnswer = (correctAnswer, userAnswer) => {
  if (correctAnswer === userAnswer) {
    score++;
    console.log(score);
    showNextQuestion();
  }
} 

// event listener for answer buttons
questionChoices.addEventListener('click', (event) => {
  const userAnswer = event.target.innerText;
  const correctAnswer = questions[currentQuestionIndex].answer;
  checkAnswer(correctAnswer, userAnswer);
});
  
  // // loops through questions array and displays current question and choices
  // for (let i = 0; i < questions.length; i++) {}
  //   questionTitles.innerText = currentQuestion;
  //   questionChoices.innerHTML = `<button>${A}</button>
  //   <button>${B}</button>
  //   <button>${C}</button>
  //   <button>${D}</button>`;



