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

//array of questions 
const questions = [
  // question  1
  {
    question: "What Washington D.C. band in 1985 was recognized as the first emo band?",
    choiceA: "Rites of Spring",
    choiceB: "Sunny Day Real Estate",
    choiceC: "The Jazz June",
    choiceD: "Embrace",
  },
  // question 2
  {
    question: "What is the name of the band that released the album 'Unkwon Pleasures' in 1979?",
    choiceA: "Wire",
    choiceB: "Gang of Four",
    choiceC: "The Cure",
    choiceD: "Joy Division",
  },
  // question 3
  {
    question: "Who is the lead singer of the band 'The Smiths'?",
    choiceA: "Todd Rundgren",
    choiceB: "Henry Rollins",
    choiceC: "Morrissey",
    choiceD: "Robert Smith",
  },
  // question 4
  {
    question: "Which rapper released the album 'Liquid Swords' in 1995?",
    choiceA: "Biggie Smalls",
    choiceB: "Andre 3000",
    ChoiceC: "GZA",
    choiceD: "Nas",
  },
  // question 5
  {
    question: "What was the band Jawbreaker's second studio album released in 1992?",
    choiceA: "Dear You",
    choiceB: "Bivouac",
    choiceC: "24 Hour Revenge Therapy",
    choiceD: "Unfun",
  },
  //question 6
  {
    question: "What artist is largely credited with the creation of the movement 'Straight Edge'?",
    choiceA: "Ian MacKaye",
    choiceB: "Henry Rollins",
    choiceC: "Brian Wilson",
    choiceD: "Ian Svenonius",
  },
  //question 7 
  {
    question: "Who is the lead singer of the band 'Led Zeppelin'?",
    choiceA: "Mick Jagger",
    choiceB: "Robert Plant",
    choiceC: "Jim Morrison",
    choiceD: "Thom Yorke",
  },
  // question 8
  {
    question: "What genre is considered the precursor of Dubstep?",
    choiceA: "Trance",
    choiceB: "Big Beat",
    choiceC: "Drum and Bass",
    choiceD: "Grime",
  },
  //question 9
  {
    question: "What historical figure heavily influenced the album 'In the Aeroplane Over the Sea' by Neutral Milk Hotel?",
    choiceA: "Albert Einstein",
    choiceB: "Anne Frank",
    choiceC: "Emma Goldman",
    choiceD: "Sigmund Freud",
  },
  //question 10
  {
    question: "What is the name of the band that released the album 'The Devil and God are Raging Inside Me' in 2006?",
    choiceA: "Brand New",
    choiceB: "Taking Back Sunday",
    choiceC: "The Get Up Kids",
    choiceD: "Thursday",
  },
  // question 11
  {
    question: "How many studio albums did the band 'Nirvana' release?",
    choiceA: "1",
    choiceB: "4",
    choiceC: "3",
    choiceD: "2",
  },
  // question 12
  {
    question: "What is the origin of the name of the musical genre 'Shoegaze'?",
    choiceA: "Artists would stare at their pedal boards while playing live shows",
    choiceB: "Shiny shoes were a staple of the fashion of the genre",
    choiceC: "The genre was created by a band called 'Low Gaze'",
    choiceD: "The genre was created by a band called 'My Bloody Valentine'",
  },
  // question 13
  {
    question: "What revolutionary ideas did the genre Jazz introduce to the world of music?",
    choiceA: "Improvisation",
    choiceB: "Syncopation",
    choiceC: "Both A and B",
    choiceD: "The pentatonic scale",
  },
  //question 14
  {
    question: "What band embodies the slacker indie vibe of the 90s?",
    choiceA: "Pavement",
    choiceB: "Sonic Youth",
    choiceC: "The Pixies",
    choiceD: "Dinosaur Jr.",
  },
  


];

let currentQuestionIndex = 0;

//populate quiz with question titles 
const displayQuestions = () => {
  const currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.question;
}
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
