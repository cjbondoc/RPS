class RockPaperScissors 
{
    constructor(){
        this.choice = ['rock', 'paper', 'scissors'];
        this.playerScore = 0;
        this.computerScore = 0;
        this.round = 0;
    }

    // Logic for computer to choose a hand at random
    getComputerChoice(){
        const randIndex = Math.floor(Math.random() * this.choice.length);
        return this.choice[randIndex];
    }

    // Determines winner per round
    playRound(playerChoice){
        const computerChoice = this.getComputerChoice();

        if (playerChoice === computerChoice){
            this.round++;
            this.updateScoreDisplay();
            document.getElementById('round-result').textContent = "It's a tie!"
            return;
        }
        
        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') 
        ) {
            this.round++;
            this.playerScore++;
            this.updateScoreDisplay();
            document.getElementById('round-result').textContent = "You win!";
        } else {
            this.round++;
            this.computerScore++;
            this.updateScoreDisplay();
            document.getElementById('round-result').textContent = "You lose!";
        }
    }

    // Updates the score in the HTML file after a round
    updateScoreDisplay() {
        document.getElementById('player-score').textContent = this.playerScore;
        document.getElementById('computer-score').textContent = this.computerScore;
        document.getElementById('round-count').textContent = "Round: " + this.round;
    }
}


const game = new RockPaperScissors();
const buttons = document.querySelectorAll('.choices button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
    const target = e.currentTarget.id;

    switch(target) {
        case 'rock':
            game.playRound('rock');
            break;
        case 'paper':
            game.playRound('paper');
            break;
        case 'scissors':
            game.playRound('scissors');
            break;

        }
    });
});

