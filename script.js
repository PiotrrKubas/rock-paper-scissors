let humanScore = 0;
let computerScore = 0;
const humanScoreField = document.querySelector('.human-score');
const computerScoreField = document.querySelector('.computer-score');
const gameStatus = document.querySelector('.game-status');

gameStart();

function gameStart() {
	humanScoreField.textContent = humanScore;
	computerScoreField.textContent = computerScore;
	gameStatus.textContent = 'Your move!';
}

function getComputerChoice() {
	const rock = 'rock';
	const paper = 'paper';
	const scissors = 'scissors';
	const max = 3;
	const random = Math.floor(Math.random() * max);

	if (random === 0) {
		return rock;
	} else if (random === 1) {
		return paper;
	} else {
		return scissors;
	}
}

function getHumanChoice() {
	const humanChoice = window.prompt("input 'rock', 'paper' or 'scissors'");
	return humanChoice.trim().toLowerCase();
}

function playRound() {
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();
	switch (humanSelection) {
		case 'rock':
			if (computerSelection === 'scissors') {
				console.log('You have won, rock beats scissors!');
				humanScore++;
			} else if (computerSelection === 'paper') {
				console.log('You have lost, paper beats rock!');
				computerScore++;
			} else {
				console.log("It's a draw!");
			}
			break;
		case 'paper':
			if (computerSelection === 'rock') {
				console.log('You have won, paper beats rock!');
				humanScore++;
			} else if (computerSelection === 'scissors') {
				console.log('You have lost, scissors beat paper');
				computerScore++;
			} else {
				console.log("It's a draw!");
			}
			break;
		case 'scissors':
			if (computerSelection === 'paper') {
				console.log('You have won, scissors beat paper');
				humanScore++;
			} else if (computerSelection === 'rock') {
				console.log('You have lost, rock beat scissors');
				computerScore++;
			} else {
				console.log("It's a draw!");
			}
			break;
		default:
			console.log('Incorrect input');
			break;
	}
}

function playGame() {
	for (let index = 0; index < 5; index++) {
		playRound();
		console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
	}
}
