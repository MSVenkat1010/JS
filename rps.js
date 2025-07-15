// code for Rock, Paper, scissors game
const choices = ['Rock', 'Paper', 'Scissors'];
let playerChoice = null;
 document.getElementById('rock').addEventListener('click', () => returnChoice('Rock'));
    document.getElementById('paper').addEventListener('click', () => returnChoice('Paper'));
    document.getElementById('scissor').addEventListener('click', () => returnChoice('Scissors'));
function returnChoice(choice) {
    playerChoice = choice;
}
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {

    if (!choices.includes(playerChoice)) {
        document.getElementById('result').innerText = 'Invalid choice! Please choose R, P, or S.';
        return;
    }
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    document.getElementById('result').innerText = `Computer chose ${computerChoice}. ${result}`;
}
