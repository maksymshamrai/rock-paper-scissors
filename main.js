console.log('Maksym Shamrai');

let compScore = document.querySelector(".rps-result-computer");
let userScore = document.querySelector(".rps-result-player");
let showWinner = document.querySelector(".rps-won");
let compButton = document.querySelector(".rps-comp-variant"); // кнопка "Варіант комп'ютера"

let defaultUserScore = 0;
let defaultComputerScore = 0;

let userChoice;
let compChoice;

// обробники для кнопок гравця
document.querySelector(".rock").onclick = function() {
    userChoice = "rock";
}
document.querySelector(".paper").onclick = function() {
    userChoice = "paper";
}
document.querySelector(".scissors").onclick = function() {
    userChoice = "scissors";
}

// випадковий вибір комп'ютера
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// обробник для кнопки "Варіант комп'ютера"
compButton.onclick = function() {
    if (!userChoice) {
        showWinner.textContent = "Спочатку зробіть свій вибір!";
        return;
    }

    compChoice = getComputerChoice();
    compButton.textContent = compChoice; // змінюємо текст кнопки на вибір комп’ютера
    playGame();

    // через 2 секунди повертаємо кнопку до початкового стану
    setTimeout(() => {
        compButton.textContent = "Варіант комп'ютера";
        userChoice = null; // скидаємо вибір гравця, щоб він зробив новий
    }, 2000);
}

// основна логіка гри
function playGame() {
    if (userChoice === compChoice) {
        showWinner.textContent = "Нічия!";
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "scissors" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "rock")
    ) {
        defaultUserScore++;
        showWinner.textContent = "Ви перемогли!";
    } else {
        defaultComputerScore++;
        showWinner.textContent = "Комп’ютер переміг!";
    }

    // оновлення рахунку
    userScore.textContent = defaultUserScore;
    compScore.textContent = defaultComputerScore;
}
