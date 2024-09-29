function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0){
        return "rock";
    }

    else if (choice === 1){
        return "paper";
    }

    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Choose rock, paper, or scissors:");
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let playerChoice = humanChoice.toLowerCase();
    
        if (playerChoice === computerChoice){
            console.log("No winner. It's a tie!")
        }
    
        else if (playerChoice === "rock" && computerChoice === "paper"
                || playerChoice === "paper" && computerChoice === "scissors"
                || playerChoice === "scissors" && computerChoice === "rock")
        {
            console.log('You lose! ' + computerChoice + ' beats ' + playerChoice);
            computerScore++;
        }
    
        else{
            console.log('You win! ' + playerChoice + ' beats ' + computerChoice);
            humanScore++;
        }
    }

    let gamesPlayed = 0;

    while (gamesPlayed != 6){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        gamesPlayed++;
    }

    if (humanScore > computerScore){
        console.log("You won the game! You scored higher!");
    }

    else if (computerScore > humanScore){
        console.log("You lost the game! The computer's score was higher!");
    }

    // Only if num rounds is even
    else{
        console.log("Neither side wont the game! Your scores match!")
    }
}

playGame();