// Computer Random Choice function
let computerPlay = () => {
    let choice = ['paper', 'rock', 'scissors']
    let random = () => {return Math.floor(Math.random() * choice.length)};
    return choice[random()]
}

// Targets the form with an id of submit and attaches an event listener that fires when enter is pressed in the submit the form, it then rund the playRound function
document.getElementById('submit').addEventListener('submit', e => {
    playRound(playerSelection, computerPlay());
    e.preventDefault()
})

// targets the input element with an id of playerChoice and attaches an event listener that fires when text is written, the text then gets stored inside of the playerChoice var
document.getElementById('playerChoice').addEventListener('change', e => {
    playerSelection = document.getElementById('playerChoice').value.toLowerCase()
})

// event listener for button to call the playRound function which takes playerselection and computerPlay as the parameters to run the function
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
    } else if (playerSelection == computerSelection) {
        result = (`Its a Tie!`)
    } else {
        alert('Please pick between Paper, Rock or Scissors!')
        return
    }
    // creates p elements, adds text from the result of playRound function inside of them and appends them to the div by Id
    let pEl = document.createElement('p')
    pEl.textContent = result;
    document.getElementById('choice').appendChild(pEl)
}

