// console.log(input)
// Computer Choice
let computerPlay = () => {
    let computerChoice = ['paper', 'rock', 'scissors']
    let random = () => {return Math.floor(Math.random() * computerChoice.length)};
    return computerChoice[random()]
}

console.log(computerPlay())



