class RockPaperScissors 
{
    constructor(){
        this.choice = ['rock', 'paper', 'scissors'];
        this.playerScore = 0;
        this.computerScore = 0;
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
            return "It's a tie!"
        }
        
        if(
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'rock') 
        ) {
            this.playerScore++;
            this.updateScoreDisplay();
            return "You win!";
        } else {
            this.computerScore++;
            this.updateScoreDisplay();
            return "You lose!";
        }
    }

    // Updates the score in the HTML file after a round
    updateScoreDisplay() {
        document.getElementById('player-score').textContent = this.playerScore;
        document.getElementById('computer-score').textContent = this.computerScore;
    }
}


const game = new RockPaperScissors();



