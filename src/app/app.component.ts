import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  choices: string[] = ['Rock', 'Paper', 'Scissor']
  icons: string[] = ['✊', '✋', '✌']

  roundCount: number = 0;

  playerScore: number = 0;
  playerChoice: string = '';
  playerIcon: string = '';

  computerScore: number = 0;
  computerChoice: string = '';
  computerIcon: string = '';

  message: string = '';

  startGame(playerChoice: string): void {
    this.roundCount += 1;
    let playerValue = this.choices.indexOf(playerChoice);
    this.playerIcon = this.icons[playerValue];
    let computerValue = Math.floor(Math.random() * 3);
    this.computerIcon = this.icons[computerValue];
    this.computerChoice = this.choices[computerValue];

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
  }

  resetScore(): void {
    this.playerScore = 0;
    this.computerScore = 0;
    this.roundCount = 0;
    this.message = '';
    this.playerIcon = '';
    this.computerIcon = '';
  }
}
