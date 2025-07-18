import { logMessage } from './webAPI.js';
const choices = ['Rock', 'Paper', 'Scissors'];
let playerChoice = null;

document.querySelectorAll('.buttonChoice').forEach(btn => {
  const choice = btn.dataset.choice;
  if (choices.includes(choice)) {
    btn.addEventListener('click', () => playerChoice = choice);
  }
});

document.querySelector('.playButton').addEventListener('click', game);

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
  if (player === computer) return "It's a tie!";
  const wins = {
    Rock: 'Scissors',
    Paper: 'Rock',
    Scissors: 'Paper'
  };
  return wins[player] === computer
    ? `You win! ${player} beats ${computer}.`
    : `You lose! ${computer} beats ${player}.`;
}

function game() {
  if (!playerChoice) {
    document.getElementById('result').innerText = 'Please choose Rock, Paper, or Scissors.';
    return;
  }

  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);
  document.getElementById('result').innerText = `Computer chose ${computerChoice}. ${result}`;
}

logMessage("Game initialized. Choose your option!");