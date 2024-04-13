// Giving computer choices

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex].toLowerCase();
}

// Game rules

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie";
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Instruction of the Game!

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('choose Rock, paper or scissor: ');
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        round++;

        if (roundResult.includes('Win')) {
            playerScore++;
        }else if (roundResult.includes('Lose')){
            computerScore++;
        }
        console.log(`Round ${round}: ${roundResult}`);
    }

    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');
    const resultElement = document.getElementById('result');

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    if (playerScore > computerScore) {
        resultElement.textContent = `You Win the game! Player Score: ${playerScore}, computer Score: ${computerScore}`;
    } else if (computerScore > playerScore) {
        resultElement.textContent = `You lose the game! Player Score: ${playerScore}, computer Score: ${computerScore}`;
    } else {
        resultElement.textContent = `It's a tie! PlayerScore: ${playerScore}, Computer Score: ${computerScore}`;
    }
}

// Adding button interaction!

document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.choice');
    

    buttons.forEach(button => {
        button.addEventListener('click', function() {
           playGame();
        })
    })
})