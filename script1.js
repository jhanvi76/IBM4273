const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Name the first man to walk on the Moon?",
        options: ["Neil Armstrong", "Rakesh Sharma", "Alan Bean", "Pete Conrad"],
        answer: "Neil Armstrong"
    },
    {
        question: "Name the densest jungle in the world?",
        options: ["Sinharaja Forest Reserve", "Amazon Rainforest", "Daintree Rainforest", "Borneo Rainforest"],
        answer: "Amazon Rainforest"
    },
    {
        question: "What type of gas is absorbed by plants?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Name the longest river on the Earth?",
        options: ["Amazon River", "Ganges", "Nile River", "Indus River"],
        answer: "Nile River"
    },
    {
        question: "Name a natural satellite of Earth?",
        options: ["Polar", "Landsat 9", "Landsat 1", "Moon"],
        answer: "Moon"
    },
    {
        question: " Barometer used to measure Atmospheric Pressure.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Name the smallest continent?",
        options: ["Asia", "Africa", "North America", "Australia"],
        answer: "Australia"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const scoreContainer = document.getElementById('score-container');
const restartButton = document.getElementById('restart-btn');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz-container').style.display = 'none';
    scoreElement.textContent = score;
    scoreContainer.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

restartButton.addEventListener('click', restartQuiz);

loadQuestion();
