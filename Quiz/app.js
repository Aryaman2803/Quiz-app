const quizData = [
  {
    question:
      "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
    a: "2005",
    b: "2008",
    c: "2010",
    d: "2012",
    correct: "b",
  },
  {
    question: " What is the name of Thor’s hammer?",
    a: "Vanir",
    b: "Mjolnir",
    c: "Aesir",
    d: "Norn",
    correct: "b",
  },
  {
    question: "What is Captain America’s shield made of?",
    a: "Adamantium",
    b: "Promethium",
    c: "Vibranium",
    d: "Carbonadium",
    correct: "c",
  },
  {
    question:
      " Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
    a: "H.O.M.E.R.",
    b: "J.A.R.V.I.S.",
    c: "A.L.F.R.E.D.",
    d: "M.A.R.V.I.N.",
    correct: "b",
  },
  {
    question:
      "Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
    a: "Thor",
    b: "Tony Stark",
    c: "The Collector",
    d: "Loki",
    correct: "d",
  },
];

const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const button = document.querySelector("button");
const answersEle = document.querySelectorAll(".answer");
const quiz = document.querySelector("#quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  delselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersEle.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function delselectAnswers() {
  answersEle.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
}
button.addEventListener("click", () => {
  //check to see answer
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //SHOW RESULTS
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}.</h2>
      <button onClick='location.reload()'> Reload</button>`;
    }
  }
});
