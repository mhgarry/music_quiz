// constant variables to be used in the quiz application
const startBtn = document.querySelector('.start-btn');
const timeDisplay = document.querySelector('.timer');
const questionTitles = document.querySelector('.question-title');
const theQuiz = document.querySelector('.quiz-container')
const questionChoices = document.querySelector('.btn');
const scoreDisplay = document.querySelector('.score');
const userInput = document.querySelectorAll('.btn');  // selects all buttons  
// use the Fisher-Yates shuffle algorithm to shuffle the questions array to randomize the question order
const shuffleIndex = (index) => {
  for (let i = index.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [index[i], index[randomIndex]] = [index[randomIndex], index[i]];
  }
}
// question index for array
let currentQuestionIndex = 0;
// starting score
let score = 0;
let timer;  // Declare timer variable outside the startTimer function

// initiate quiz and start functions
const init = () => {
  shuffleIndex(questions);
  quizStart();
  showQuestions();
  startTimer();
};

startBtn.addEventListener('click', init); // runs init function on click

// start quiz and hide intro screen and show quiz screen
const quizStart = () => {
  startBtn.classList.add('hidden');
  theQuiz.classList.remove('hidden'); 
};

// function to start the timer when the quiz and each individual question starts
const startTimer = () => {
  let time = 10;
  timer = setInterval(() => {
    time--;
    timeDisplay.innerText = time;
    if (time <= 0) {
      clearInterval(timer);
    }
  }, 1000); // timer points to setInterval function which counts time variable down from 10
};

// function to show questions and choices 
const showQuestions = () => {
  // sets current question title
  const currentQuestion = questions[currentQuestionIndex].question;
  //sets current question choices
  const currentAnswers = questions[currentQuestionIndex].answers;
  const A = currentAnswers.A;
  const B = currentAnswers.B;
  const C = currentAnswers.C;
  const D = currentAnswers.D;
  // loops through title and choices and displays them
  questionTitles.innerText = currentQuestion;
  // sets current question title and choices
  questionChoices.innerHTML = `
    <div class="choices-container">
      <button>${A}</button>
      <button>${B}</button>
      <button>${C}</button>
      <button>${D}</button>
    </div>
  `;
};

// function to show next question
const nextQuestion = () => { 
  currentQuestionIndex++;
  clearInterval(timer);
  startTimer();
  showQuestions();
};

// function to check answer
const checkAnswer = (input, answer) => {
  input = input.target.innerText;
  answer = questions[currentQuestionIndex].answer;
  if (input === answer) {
    score++;
    scoreDisplay.innerHTML = `<span>Score:</span>${score}`;
    
    console.log('correct');
  }
  else {
    console.log('incorrect');
  }
  nextQuestion();
};
//save scores to local storage 
const saveScore = () => {
  const finalScore = document.querySelector('.final-score').value;
  const userInitials = document.querySelector('#name').value
  localStorage.setItem('User Score', finalScore);
  localStorage.setItem('User Intials', userInitials);
};

const getScores = () => {
  const finalScore = localStorage.getItem(finalScore);
  const userInitials = localStorage.getItem(userInitials);
};

// event listener for user input
userInput.forEach((input) => {
  input.addEventListener('click', checkAnswer);
});