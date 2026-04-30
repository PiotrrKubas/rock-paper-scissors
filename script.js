let humanScore = 0;
let computerScore = 0;
const humanScoreField = document.querySelector('.human-score');
const computerScoreField = document.querySelector('.computer-score');
const gameStatus = document.querySelector('.game-status');
const btn = document.querySelectorAll('.player-button');
const nextRound = document.getElementById('next-round');

for (const i of btn) {
	i.addEventListener('click', () => playRound(i));
}
nextRound.addEventListener('click', () => roundStart());
function roundStart() {
	if (humanScore >= 3 || computerScore >= 3) {
		humanScore = 0;
		computerScore = 0;
		humanScoreField.textContent = humanScore;
		computerScoreField.textContent = computerScore;
	}
	gameStatus.textContent = 'Your move!';
	nextRound.classList.add('disable');
	document.querySelector('.player-choice').classList.remove('player-choice');
	document
		.querySelector('.computer-choice')
		.classList.remove('computer-choice');

	let disabled = document.querySelectorAll('.disable');
	for (const d of disabled) {
		d.classList.remove('disable');
	}
}

function roundEnd() {
	for (const i of btn) {
		i.classList.add('disable');
	}
	humanScoreField.textContent = humanScore;
	computerScoreField.textContent = computerScore;
	nextRound.classList.remove('disable');

	if (humanScore >= 3) {
		alert("You've won the entire game, good job,");
	}

	if (computerScore >= 3) {
		alert("You've lost the entire game, better luck next time!");
	}
}

function playRound(choice) {
	const humanSelection = choice.id;
	const computerSelection = getComputerChoice();
	showChoices(choice, computerSelection);
	checkWinner(humanSelection, computerSelection);
	roundEnd();
}

function showChoices(choice, computerSelection) {
	choice.classList.add('player-choice');
	let computerChoice = '';
	if (computerSelection === 'rock') {
		computerChoice = document.getElementById('computer-rock');
	}
	if (computerSelection === 'paper') {
		computerChoice = document.getElementById('computer-paper');
	}
	if (computerSelection === 'scissors') {
		computerChoice = document.getElementById('computer-scissors');
	}

	computerChoice.classList.add('computer-choice');
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

function checkWinner(humanSelection, computerSelection) {
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
}
