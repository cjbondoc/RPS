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
        // Input validation
        if (!this.choice.includes(playerChoice)){
            document.getElementById('round-result').textContent = "Not a valid input";
            return;
        }

        const computerChoice = this.getComputerChoice();
        this.round++;

        //Logic for win condition
        const playerWins = (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') 
        ) 

        if (playerChoice === computerChoice){
            this.updateScoreDisplay();
            document.getElementById('round-result').textContent = `You both chose ${playerChoice}, It's a tie!`;
            return;
        }
        
        if (playerWins){
            this.playerScore++;
            this.updateScoreDisplay();
            document.getElementById('round-result').textContent = `Computer chose ${computerChoice}, you win!`;
        } else {
            this.computerScore++;
            this.updateScoreDisplay();
            document.getElementById('round-result').textContent = `Computer chose ${computerChoice}, you lose!`;
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
    const btn = e.currentTarget;

    btn.classList.add('pressed');
    setTimeout(() => {
        btn.classList.remove('pressed');
    }, 200);

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

