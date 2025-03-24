const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

  function playGame() {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const dwightBtn = document.querySelector('.stapler');
        const yogaballBtn = document.querySelector('.staple_remover');
        const playerOptions = [rockBtn, paperBtn, scissorBtn, staplerBtn, staple_removerBtn];
        const computerOptions = ['rock', 'paper', 'scissors', 'stapler', 'staple_remover']

        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${15 - moves}`;


                const choiceNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[choiceNumber];

                // Function to check who wins
                winner(this.innerText, computerChoice)

                // Calling gameOver function after 10 moves
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })

    }
function gameOver(playerOptions, movesLeft) {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })


        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
}

playgame()

game();

const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
        result.textContent = 'Tie'
    }
    else if (player == 'rock') {
        if (computer == 'paper') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        } else {
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'scissors') {
        if (computer == 'rock') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'paper') {
        if (computer == 'scissors') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'stapler') {
        if (computer == 'staple_remover') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'paper') {
        if (computer == 'stapler') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'stapler') {
        if (computer == 'rock') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'staple_remover') {
        if (computer == 'rock') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'scissors') {
        if (computer == 'stapler') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'scissors') {
        if (computer == 'staple_remover') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    
    }
