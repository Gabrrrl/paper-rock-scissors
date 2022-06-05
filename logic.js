// Computer Choice
let computerPlay = () => {
    let choice = ['paper', 'rock', 'scissors']
    let random = () => {return Math.floor(Math.random() * choice.length)};
    return choice[random()]
}

// Global Variables for functions
let playerSelection = "rock";
// let computerSelection = computerPlay();

// event listener for button to run functions
document.getElementById('pick').addEventListener('click', e => {
    playRound(playerSelection, computerPlay());
})

// determines the winner between player choice and computer choice
let playRound = (playerSelection, computerSelection) => {
    let result = ``
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        result = (`You Win! ${playerSelection} beats ${computerSelection}`)
        
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        result = (`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else {
        result = (`Its a Tie!`)
    }
    // creates p elements, adds text from the result of playRound function inside of them and appends them to the div by Id
    let pEl = document.createElement('p')
    pEl.textContent = result;
    document.getElementById('choice').appendChild(pEl)
}

