import { Component, input } from '@angular/core';
import { Game } from '../../../core/type/game';

@Component({
  selector: 'app-game-card',
  imports: [],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css'
})
export class GameCard {
  gameInfo = input<Game>();
}
