// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resulyDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerscore = 0;

function playGame(playerChoice){

    const computerChoice = choice[Math.floor(Math.random() * 3)]
    let result = "";

if(playerChoice === computerChoice){
    result = "IT'S A TIE";
}
else{
    switch(playerChoice){
        case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN " :
            break;
        case ""
    }
}
}