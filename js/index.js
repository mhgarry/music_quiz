// constant variables to be used in the quiz application
const startBtn = document.querySelector('.start-btn');
const timeDisplay = document.querySelector('.timer');
const questionTitles = document.querySelector('.question-title');
const theQuiz = document.querySelector('.quiz-container')
const questionChoices = document.querySelector('.btn');
const scoreDisplay = document.querySelector('.score');
const userInput = document.querySelectorAll('.btn'); // selects all buttons  
const results = document.querySelector('.result-container');
const userInitialsInput = document.querySelector('.name');
const highScores = document.querySelector('.high-scores');
const endScore = document.querySelector('.final-score');
const submitScore = document.querySelector('.submit-score');
const restartBtn = document.querySelector('.restart-btn');
const feedbackDisplay = document.querySelector('.feedback-display');
// question index for array
let currentQuestionIndex = 0;
// starting score
let score = 0;
let timer; // Declare timer variable outside the startTimer function
// use the Fisher-Yates shuffle algorithm to shuffle the questions array to randomize the question order

const shuffleIndex = (index) => {
  for (let i = index.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [index[i], index[randomIndex]] = [index[randomIndex], index[i]];
  };
};

// initiate quiz and start functions
const init = () => {
  shuffleIndex(questions)
  quizStart();
  showQuestions();
  startTimer();
  results.classList.add('hidden')
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
      // endQuiz();
      nextQuestion();
    };
  }, 1000);
};

// function to show questions and choices 
const showQuestions = () => {
  if (questions[currentQuestionIndex]) {
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
      <button class="choices">${A}</button>
      <button class="choices">${B}</button>
      <button class="choices">${C}</button>
      <button class="choices">${D}</button>
    </div>
  `;
  } else {
    console.error('No question found for the current index');
  };
};

// function to show next question
const nextQuestion = () => {
  currentQuestionIndex++;
  clearInterval(timer);
  startTimer();
  showQuestions();
};
// function to check if the answer is correct and add score
const checkAnswer = (input) => {
  const selectedAnswer = input.target.innerText;
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion) {
    const correctAnswer = currentQuestion.answer;
    if (selectedAnswer === correctAnswer) {
      score++;
      scoreDisplay.innerHTML = `<span>Score:</span>${score}`;
      feedbackDisplay.innerHTML = `<span>Correct!</span>`
      console.log('correct');
    } else {
      feedbackDisplay.innerHTML = `<span>Wrong!!</span>`
      console.log('incorrect');
    };

    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    } else {
      endQuiz();
    }
  } else {
    console.error('No question found');
  };
};
//function to enter a quiz instances results into local storage
const enterResults = () => {
  const userInitials = userInitialsInput.value.trim();
  userInitialsInput.innerText = userInitials;

  endScore.innerText = `You Scored: ${score}`;

  const savePair = {
    finalScore: score,
    initials: userInitials,
  };

  let allScores = JSON.parse(localStorage.getItem('allScores')) || [];
  allScores.push(savePair);
  localStorage.setItem('allScores', JSON.stringify(allScores));
};
//function to display high scores using the scores we fetched from local storage
const highScoreDisplay = () => {
  let allScores = localStorage.getItem('allScores');
  allScores = JSON.parse(allScores);

  if (allScores !== null) {
      //sort scores in descending order
      allScores.sort((a, b) => b.finalScore - a.finalScore);
      //define top 5 scores
      const topScores = allScores.slice(0, 5)

      //clear high score container
      highScores.innerHTML = '';
      //display top 5 scores
      topScores.forEach((score, index) => {
        const highScoreList = document.createElement('li');
        highScoreList.textContent = `${index + 1}. ${score.initials}: ${score.finalScore}`;
        highScores.append(highScoreList);
      });

      if (currentQuestionIndex === questions.length) {
        highScoreDisplay();
      };

    };
};
// function to end quiz and perform needed inputs
const endQuiz = () => {
  theQuiz.classList.add('hidden');
  timeDisplay.classList.add('hidden');
  results.classList.remove('hidden');
  enterResults();
  highScoreDisplay();
};
// event listener for user input
userInput.forEach((input) => {
  input.addEventListener('click', checkAnswer);
});
// event listener for entering initials 
submitScore.addEventListener('click', enterResults);
restartBtn.addEventListener('click', () => {
    results.classList.add('hidden');
    startBtn.classList.remove('hidden');
    window.location.reload();
});