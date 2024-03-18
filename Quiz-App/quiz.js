const questions = [
    {
        question: "What is JavaScript?",
        options: ["A programming language", "A markup language", "A database language", "A styling language"],
        answer: 0
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!--", "/*", "#"],
        answer: 0
    },
    {
        question: "What keyword is used to declare variables in JavaScript?",
        options: ["dim", "int", "var", "let"],
        answer: 2
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["string", "boolean", "character", "number"],
        answer: 2
    },
    {
        question: "Which function is used to print content in the console?",
        options: ["print()", "log()", "display()", "write()"],
        answer: 1
    },
    {
        question: "What is the output of '2' + 2 in JavaScript?",
        options: ["4", "22", "Error", "NaN"],
        answer: 1
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: ["The current object", "The parent object", "The global object", "The child object"],
        answer: 0
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        options: ["To enable strict mode", "To disable strict mode", "To run JavaScript in strict mode", "To validate code syntax"],
        answer: 0
    },
    {
        question: "What is the result of 3 == '3' in JavaScript?",
        options: ["true", "false", "Error", "NaN"],
        answer: 0
    },
    {
        question: "Which method is used to add a new element to an array in JavaScript?",
        options: ["push()", "add()", "append()", "insert()"],
        answer: 0
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "JavaScript Oriented Notation", "JavaScript Object Naming", "JavaScript Operations Network"],
        answer: 0
    },
    {
        question: "What is the result of typeof null in JavaScript?",
        options: ["object", "null", "undefined", "number"],
        answer: 0
    },
    {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        options: ["==", "===", "!=", "!=="],
        answer: 1
    },
    {
        question: "What does the Array.isArray() method do in JavaScript?",
        options: ["Checks if a value is an array", "Concatenates two arrays", "Reverses an array", "Sorts an array"],
        answer: 0
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: ["pop()", "remove()", "delete()", "splice()"],
        answer: 0
    },
    {
        question: "What is the result of '20' > '3' in JavaScript?",
        options: ["true", "false", "Error", "NaN"],
        answer: 0
    },
    {
        question: "Which built-in method returns the length of a string in JavaScript?",
        options: ["length()", "size()", "count()", "length"],
        answer: 3
    },
    {
        question: "What does the isNaN() function do in JavaScript?",
        options: ["Checks if a value is not a number", "Checks if a value is null", "Checks if a value is undefined", "Checks if a value is an object"],
        answer: 0
    },
    {
        question: "What is the result of typeof undefined in JavaScript?",
        options: ["undefined", "null", "object", "number"],
        answer: 0
    },
    {
        question: "Which method is used to join two or more arrays in JavaScript?",
        options: ["concat()", "merge()", "join()", "combine()"],
        answer: 0
    },
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        options: ["10", "55", "Error", "NaN"],
        answer: 1
    }
];
let currentQuestion = 0;
let score = 0;

function startQuiz() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert("Please enter your name!");
        return;
    }

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion();
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledQuestions = shuffle(questions);

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const currentQ = shuffledQuestions[currentQuestion];

    questionElement.textContent = currentQ.question;
    optionsContainer.innerHTML = "";

    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.onclick = () => checkAnswer(index); // Add onclick event
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQ = questions[currentQuestion];
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.disabled = true; // Disable all options after selection
    });

    if (selectedOption === currentQ.answer) {
        score++;
    }

    setTimeout(() => { // Delay before moving to the next question
        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            showEndScreen();
        }

        document.getElementById('score-value').textContent = score;
    }, 1000); // Adjust delay time if needed
}

function showEndScreen() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
    document.getElementById('final-score').textContent = score;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    document.getElementById('username').value = "";
}