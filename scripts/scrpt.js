
function computerPlay(){
    const options=["ROCK", "PAPER", "SCISSORS"]
    let random = Math.floor(Math.random() * options.length)
    return(random, options[random])
}

function playRound(playerSelection, computerSelection) {
    let playerCounter=0; 
    let computerCounter=0
    computerPlay()
  
    if (playerSelection==computerSelection){
        alert("Draw! Try Again")
    }
    else if (playerSelection=="ROCK" & computerSelection=="PAPER"){
        alert("You lose!!! Paper beats Rock.")
    }
    else if (playerSelection=="ROCK" & computerSelection=="SCISSORS"){
        alert("You win!!! Rock beats Scissors")
    }
    else if(playerSelection=="PAPER" & computerSelection=="ROCK"){
        alert("You win!!! Paper beats Rock.")
    }
    else if (playerSelection == "PAPER" & computerSelection == "SCISSORS"){
        alert("You lose!!! Scissors beats Paper.")
    }
    else if (playerSelection == "SCISSORS" & computerSelection == "ROCK"){
        alert("You lose!!! Rock beats Scissors")
    }
    else if (playerSelection == "SCISSORS"& computerSelection == "PAPER"){
        alert("You win!!! Scissors beats Paper.")
    }
    else {
        alert("You have made a wrong entry")
    }
}
// let playerSelection=prompt("ROCK, PAPER or SCISSORS?")
// let computerSelection=computerPlay()
// alert(computerSelection); 
// alert(playerSelection.toUpperCase())
// playRound(playerSelection.toUpperCase(), computerSelection)
function game(){
    let i=0; 
    while (i<=5){
        let playerSelection=prompt("ROCK, PAPER or SCISSORS?")
        computerPlay()
        let computerSelection=computerPlay()
        playRound(playerSelection.toUpperCase(), computerSelection)
        i++
    }

}

game()