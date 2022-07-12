
function computerPlay(){
    const options=["ROCK", "PAPER", "SCISSORS"]
    let random = Math.floor(Math.random() * options.length)
    return(random, options[random])
}
let playerCounter=0; 
let computerCounter=0;
function playRound(playerSelection, computerSelection) {
    computerPlay()
  
    if (playerSelection==computerSelection){
        alert("Draw! Try Again")
    }
    else if (playerSelection=="ROCK" & computerSelection=="PAPER"){
        alert("You lose!!! Paper beats Rock.")
        computerCounter++
    }
    else if (playerSelection=="ROCK" & computerSelection=="SCISSORS"){
        alert("You win!!! Rock beats Scissors")
        playerCounter++
    }
    else if(playerSelection=="PAPER" & computerSelection=="ROCK"){
        alert("You win!!! Paper beats Rock.")
        playerCounter++

    }
    else if (playerSelection == "PAPER" & computerSelection == "SCISSORS"){
        alert("You lose!!! Scissors beats Paper.")
        computerCounter++
    }
    else if (playerSelection == "SCISSORS" & computerSelection == "ROCK"){
        alert("You lose!!! Rock beats Scissors")
        computerCounter++
    }
    else if (playerSelection == "SCISSORS"& computerSelection == "PAPER"){
        alert("You win!!! Scissors beats Paper.")
        playerCounter++
    }
    else {
        alert("You have made a wrong entry")
    }
  
}
function game(){
    let i=0; 
    while (i<3){
        let playerSelection=prompt("ROCK, PAPER or SCISSORS?")
        computerPlay()
        let computerSelection=computerPlay() 
        playRound(playerSelection.toUpperCase(), computerSelection)
        i++
    }
    alert('Your score:' +playerCounter+ ' Computer Score' +computerCounter);

    if(playerCounter>computerCounter){alert("Congratulations!!! You've won the game")}
    else if(playerCounter<computerCounter){alert("Sorry. You lose!!! ")}
     else if (playerCounter==computerCounter){"It's a tie!!!"}
}


game()