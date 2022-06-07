// Global var that all functions can use
let playerScore = 0;
let computerScore = 0;

// Computer Random Choice function
let computerPlay = () => {
    let choice = ['paper', 'rock', 'scissors']
    let random = () => { return Math.floor(Math.random() * choice.length) };
    return choice[random()]
}

// determines the winner between player choice and computer choice, also adds 1 point to the playerpoints or computerpoints if there was a winner then calls the determineWinner function
let playRound = (playerSelection, computerSelection) => {
    let result = ``
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++
        result = (`You Win! ${playerSelection} beats ${computerSelection}\nYou have ${playerScore} points And the computer has ${computerScore} points`)
        determineWinner()
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++
        result = (`You Lose! ${computerSelection} beats ${playerSelection}\nYou have ${playerScore} points And the computer has ${computerScore} points`)
        determineWinner()
    } else if (playerSelection == computerSelection) {
        result = (`Its a Tie!\nYou have ${playerScore} points And the computer has ${computerScore} points`)
    } else {
        alert('Please pick between Paper, Rock or Scissors!')
        return
    }
    // creates p elements, adds text from the result of playRound function inside of them and appends them to the div by Id
    let pEl = document.createElement('p')
    pEl.textContent = result;
    document.querySelector('#output').prepend(pEl)
}

// function that determines the winner after 5 wins and reloads the page after being acknowledgement
let determineWinner = () => {
    if (playerScore == 5) {
        alert('You Won The Game!')
        location.reload()
    } else if (computerScore == 5) {
        alert('You Lost The Game!')
        location.reload()
    }
}

// attach event listeners for the buttons and get playerchoice from button value.
document.querySelector('#rock').addEventListener('click', (e) => {
    playerSelection = 'rock'
    playRound(playerSelection, computerPlay());
})
document.querySelector('#paper').addEventListener('click', (e) => {
    playerSelection = 'paper'
    playRound(playerSelection, computerPlay());
})
document.querySelector('#scissors').addEventListener('click', (e) => {
    playerSelection = 'scissors'
    playRound(playerSelection, computerPlay());
})
