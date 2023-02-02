const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const hiddenClass = Array.from(document.getElementsByClassName('hidden'));
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    displayResults();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'paper';
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a Draw.";
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'You Win!!!';
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'You Lost.';
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'You Win!!!';
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You Lost.';
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'You Win!!!';
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You Lost.';
  }

  resultDisplay.innerHTML = result;

  if (resultDisplay.innerHTML === "It's a Draw.") {
    resultDisplay.style.color = 'yellow';
  }
  if (resultDisplay.innerHTML === 'You Win!!!') {
    resultDisplay.style.color = 'green';
  }
  if (resultDisplay.innerHTML === 'You Lost.') {
    resultDisplay.style.color = 'red';
  }
}

function displayResults() {
  hiddenClass.forEach((element) => (element.style.visibility = 'visible'));
}
