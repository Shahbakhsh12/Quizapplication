const question = [
  {
    question: "Which is largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is largest country in the world?",
    answer: [
      { text: "Russia", correct: true },
      { text: "India", correct: false },
      { text: "Chain", correct: false },
      { text: "South Africa", correct: false },
    ],
  },
  {
    question: "Which is largest population country in the world?",
    answer: [
      { text: "Russia", correct: false },
      { text: "India", correct: true },
      { text: "Chain", correct: false },
      { text: "South Africa", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answer: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "The old name of Iran?",
    answer: [
      { text: "Persia", correct: true },
      { text: "Zahedan", correct: false },
      { text: "Tehran", correct: false },
      { text: "Taftan", correct: false },
    ],
  },
  {
    question: "Which of the following language has most alphabets?",
    answer: [
      { text: "Urdu", correct: false },
      { text: "Balochi", correct: false },
      { text: "English", correct: false },
      { text: "Sindhi", correct: true },
    ],
  },
  {
    question: "+92 is the country code of?",
    answer: [
      { text: "Saudia Arabia", correct: false },
      { text: "China", correct: false },
      { text: "Kuwait", correct: false },
      { text: "Pakistan", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answer: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctica", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "National Flower of Pakistan is?",
    answer: [
      { text: "Rose", correct: false },
      { text: "Tulip", correct: false },
      { text: "Jasmine", correct: true },
      { text: "Lily", correct: false },
    ],
  },
  {
    question: "The Secretary General of the OIC is elected for the period of?",
    answer: [
      { text: "4 Years", correct: false },
      { text: "3 Years", correct: false },
      { text: "5 Years", correct: true },
      { text: "6 Years", correct: false },
    ],
  },
  {
    question: "Tibet is autonomous region of?",
    answer: [
      { text: "India", correct: false },
      { text: "Russia", correct: false },
      { text: "Nepal", correct: false },
      { text: "China", correct: true },
    ],
  },
  {
    question: "Which of the following uses GMT+5 as its standard time?",
    answer: [
      { text: "India", correct: false },
      { text: "Bangladesh", correct: false },
      { text: "Pakistan", correct: true },
      { text: "Afghanistan", correct: false },
    ],
  },
  {
    question: "Which of country  won ICC World Women's Cricket world Cup 2022?",
    answer: [
      { text: "India", correct: false },
      { text: "Australia", correct: true },
      { text: "England", correct: false },
      { text: "South Africa", correct: false },
    ],
  },
  {
    question: "Who authored 'Long Walk to Freedom'?",
    answer: [
      { text: "Karl Marks", correct: false },
      { text: "Nelson Mandela", correct: true },
      { text: "Barack Hussein Obama", correct: false },
      { text: "Jawaharlal Nehru", correct: false },
    ],
  },
  {
    question: "Official Currency of Yemen is?",
    answer: [
      { text: "Rial", correct: true },
      { text: "Dirham", correct: false },
      { text: "Dinar", correct: false },
      { text: "Ringgit", correct: false },
    ],
  },
  {
    question: "Arabic is an not official language of?",
    answer: [
      { text: "Kuwait", correct: false },
      { text: "Qatar", correct: false },
      { text: "Bahrain", correct: false },
      { text: "Turkey", correct: true },
    ],
  },
  {
    question: "The Shine of Khawaja Ghulam Farid (R.A), is located in?",
    answer: [
      { text: "Ranikot", correct: false },
      { text: "Rajanpur", correct: true },
      { text: "Ranipur", correct: false },
      { text: "Rawalakot", correct: false },
    ],
  },
  {
    question: "Which of the following is a landlocked sea?",
    answer: [
      { text: "Arabian Sea", correct: false },
      { text: "South China Sea", correct: false },
      { text: "Aral Sea", correct: true },
      { text: "Yellow Sea", correct: false },
    ],
  },
  {
    question:
      "The government of Benazir Bhutto was dismissed for the second time on November 1996 my",
    answer: [
      { text: "Chief justice of Pakistan", correct: false },
      { text: "National speaker of Pakistan", correct: false },
      { text: "Chairman of Pakistan", correct: false },
      { text: "President of Pakistan", correct: true },
    ],
  },
  {
    question: "Indus water treaty was signed between which countries?",
    answer: [
      { text: "India and China", correct: false },
      { text: "Pakistan and China", correct: false },
      { text: "Pakistan and India", correct: true },
      { text: "Pakistan and afghanistan", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You score ${score} out of ${question.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < question.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
