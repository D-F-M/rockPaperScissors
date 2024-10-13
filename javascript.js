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



const results = document.querySelector('#results');
let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener("click", () => {
    let humanSelection = 'rock';
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener("click", () => {
    let humanSelection = 'paper';
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener("click", () => {
    let humanSelection = 'scissors'; 
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

function playRound(playerChoice, computerChoice){
    
    if (playerChoice === computerChoice){
        results.textContent = "No winner. It's a tie!" + "\nCPU: " + computerScore + " pts\nYou: " + humanScore;
    }

    else if (playerChoice === "rock" && computerChoice === "paper"
            || playerChoice === "paper" && computerChoice === "scissors"
            || playerChoice === "scissors" && computerChoice === "rock")
    {
        computerScore++;
        results.textContent = 'You lose! ' + computerChoice + ' beats ' + playerChoice + "\nCPU: " + computerScore + " pts\nYou: " + humanScore;
    }

    else{
        humanScore++;
        results.textContent = 'You win! ' + playerChoice + ' beats ' + computerChoice + "\nCPU: " + computerScore + " pts\nYou: " + humanScore;
    }

    if (humanScore === 5){
        console.log("You won the game! You scored 5pts!");
    }

    else if (computerScore === 5){
        console.log("You lost the game! The computer scored 5pts!");
    }
}