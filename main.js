let compScore = document.querySelector(".rps-result-computer");
let userScore = document.querySelector(".rps-result-player");
let showWinner = document.querySelector(".rps-won");
let showComputerChoice = document.querySelector(".rps-comp-variant");

let defaultUserScore = 0;
let defaultComputerScore = 0;

let userChoice;
let compChoice;

document.querySelector(".rock").onclick = function() {
    userChoice = "rock";
    playGame();
}
document.querySelector(".paper").onclick = function() {
    userChoice = "paper";
    playGame();
}
document.querySelector(".scissors").onclick = function() {
    userChoice = "scissors";
    playGame();
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playGame() {
    compChoice = getComputerChoice();
    showComputerChoice.textContent = "Комп’ютер вибрав: " + compChoice;

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

    userScore.textContent = defaultUserScore;
    compScore.textContent = defaultComputerScore;
}