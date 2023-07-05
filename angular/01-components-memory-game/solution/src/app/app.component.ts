import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCell } from './models/card-cell.model';
import { Player } from './models/player.model';
import { generateShuffledCards, toMatrix } from './helpers/card-helpers';
import { Card } from './models/card.model';
import { PlayerComponent } from './components/player/player.component';
import { BoardComponent } from "./components/board/board.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, PlayerComponent, BoardComponent]
})
export class AppComponent {
  cells: CardCell[] = [];
  player1!: Player;
  player2!: Player;
  currentPlayer!: Player;
  isCompleted = false;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.cells = generateShuffledCards();
    this.player1 = {
      name: 'Player 1', 
      collectedPairs: []
    };
    this.player2 = {
      name: 'Player 2', 
      collectedPairs: []
    };
    this.currentPlayer = this.player1;
    this.isCompleted = false;
    console.table(toMatrix(this.cells.map(i => i?.image), 7));

  }


  onMiss() {
    this.currentPlayer = (this.currentPlayer === this.player1) ? this.player2 : this.player1;
  }

  onMatch(cards: Card[]) {
    const cardIds = cards.map(c => c.id);
    this.cells = this.cells.map(c => (c === null) || (cardIds.includes(c.id)) ? null : c);

    this.currentPlayer.collectedPairs.push(cards[0]);
    this.isCompleted = this.cells.every(c => c === null);
    console.table(toMatrix(this.cells.map(i => i?.image), 7));
  }


}
