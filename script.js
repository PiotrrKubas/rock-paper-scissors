let humanScore = 0;
let computerScore = 0;
const humanScoreField = document.querySelector('.human-score');
const computerScoreField = document.querySelector('.computer-score');
const gameStatus = document.querySelector('.game-status');
const btn = document.querySelectorAll('.player-button');

gameStart();
for (const i of btn) {
	i.addEventListener('click', () => playRound(i));
}

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

function playRound(choice) {
	const humanSelection = choice.id;
	const computerSelection = getComputerChoice();
	switch (humanSelection) {
		case 'rock':
			if (computerSelection === 'scissors') {
				gameStatus.textContent = 'You have won!';
				humanScore++;
			} else if (computerSelection === 'paper') {
				gameStatus.textContent = 'You have lost!';
				computerScore++;
			} else {
				gameStatus.textContent = "It's a draw!";
			}
			break;
		case 'paper':
			if (computerSelection === 'rock') {
				gameStatus.textContent = 'You have won!';
				humanScore++;
			} else if (computerSelection === 'scissors') {
				gameStatus.textContent = 'You have lost!';
				computerScore++;
			} else {
				gameStatus.textContent = "It's a draw!";
			}
			break;
		case 'scissors':
			if (computerSelection === 'paper') {
				gameStatus.textContent = 'You have won!';
				humanScore++;
			} else if (computerSelection === 'rock') {
				gameStatus.textContent = 'You have lost!';
				computerScore++;
			} else {
				gameStatus.textContent = "It's a draw!";
			}
			break;
	}
	humanScoreField.textContent = humanScore;
	computerScoreField.textContent = computerScore;
}
