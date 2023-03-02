import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Computer random selection
  // Win-Lose-Tie Detection
  // Option to reset the game.
  // Keep score for player & computer
  // Track number of rounds

  choices: string[] = ['Rock', 'Paper', 'Scissor']

  roundCount: number = 0;

  playerScore: number = 0;
  playerChoice: string = '';

  computerScore: number = 0;
  computerChoice: string = '';

  message: string = '';

  startGame(playerChoice: string): void {
    this.roundCount += 1;
    this.computerChoice = this.choices[Math.floor(Math.random() * 3)];
    console.log(`Round ${this.roundCount} - Computer's Choice: ${this.computerChoice}`);

    if (playerChoice === this.computerChoice) {
      this.message = 'It\'s a tie!';
    } else if (playerChoice === 'Rock' && this.computerChoice === 'Paper' ||
              playerChoice === 'Paper' && this.computerChoice === 'Scissor' ||
              playerChoice === 'Scissor' && this.computerChoice === 'Rock') {
        this.computerScore += 1;
        this.message = 'You lost!';
    } else {
        this.playerScore += 1;
        this.message = 'You won!';
    }

    console.log(`${this.message}: ${this.playerScore}-${this.computerScore}`);
  }

  resetScore(): void {
    this.playerScore = 0;
    this.computerScore = 0;
    this.roundCount = 0;
    this.message = '';
  }
}
