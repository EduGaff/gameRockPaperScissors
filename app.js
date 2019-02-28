let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = userChoice + " beats " + computerChoice + ". You won!";
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = userChoice + " loses to " + computerChoice + ". You lost!";
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
	result_p.innerHTML = userChoice + " draws with " + computerChoice + ". It's a draw...";
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 500);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "RockScissors":
		case "PaperRock":
		case "ScissorsPaper":
			win(userChoice, computerChoice);
			break;
		case "RockPaper":
		case "PaperScissors":
		case "ScissorsRock":
			lose(userChoice, computerChoice);
			break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
			draw(userChoice, computerChoice);
			break;
	}
}

function main () {
	rock_div.addEventListener('click', () => game("Rock"));
	paper_div.addEventListener('click', () => game("Paper"));
	scissors_div.addEventListener('click', () => game("Scissors"));
}

main();