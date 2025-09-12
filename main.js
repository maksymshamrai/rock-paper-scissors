let compScore = document.querySelector(".rps-result-computer");
let userScore = document.querySelector(".rps-result-player");
let showWinner = document.querySelector(".rps-won");
let showComputerChoice = document.querySelector(".rps-comp-variant");

let defaultUserScore = 0;
let defaultComputerScore = 0;

let userChoice;
let compChoice;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

document.querySelector(".rock").onclick = function () {
  userChoice = "rock";
  playRound();
};

document.querySelector(".paper").onclick = function () {
  userChoice = "paper";
  playRound();
};

document.querySelector(".scissors").onclick = function () {
  userChoice = "scissors";
  playRound();
};

function playRound() {
  compChoice = getComputerChoice();
  showComputerVariant();

  if (userChoice === compChoice) {
    showWinner.textContent = "Нічия!";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    showWinner.textContent = "Ви виграли!";
    increaseUserScore();
  } else {
    showWinner.textContent = "Комп'ютер виграв!";
    increaseComputerScore();
  }
}

function increaseComputerScore() {
  defaultComputerScore++;
  compScore.textContent = defaultComputerScore;
}

function increaseUserScore() {
  defaultUserScore++;
  userScore.textContent = defaultUserScore;
}

function showComputerVariant() {
  if (compChoice === "rock") {
    showComputerChoice.textContent = "Камінь";
  } else if (compChoice === "paper") {
    showComputerChoice.textContent = "Папір";
  } else {
    showComputerChoice.textContent = "Ножиці";
  }
}
