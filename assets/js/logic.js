// Get references to various HTML elements
const startButton = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const timerElement = document.getElementById("time");
const questionsContainer = document.getElementById("questions");
const questionsTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initials = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");
const correctSound = new Audio("./assets/sfx/correct.wav");
const incorrectSound = new Audio("./assets/sfx/incorrect.wav");

// Initialize variables for the quiz
let currentQuestionIndex = 0;
let score = 0;
let time = 60;
let timer;

// Add event listener to the start button to begin the quiz
startButton.addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz(){
    // Hide the start screen and show the question section
    startScreen.classList.add("hide");
    questionsContainer.classList.remove("hide");
    showQuestion(currentQuestionIndex);
    startTimer();
}

// Function to display a question
function showQuestion(index){
    const currentQuestion = questions[index];
    questionsTitle.innerText = currentQuestion.question;
    choicesContainer.innerHTML = '';

    // Create buttons for answer choices
    currentQuestion.options.forEach((option, i) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("choice-btn");
        button.addEventListener("click", function(event){
            checkAnswer(i);
        });
        choicesContainer.appendChild(button);
    });
}