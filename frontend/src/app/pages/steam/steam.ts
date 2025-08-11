import { Component } from '@angular/core';
import { GameTagMenu } from "../../features/components/game-tag-menu/game-tag-menu";
import { GameList } from "../../features/components/game-list/game-list";

@Component({
  selector: 'app-steam',
  imports: [GameTagMenu, GameList],
  templateUrl: './steam.html',
  styleUrl: './steam.css',
})
export class Steam {
  handleTagClick(tag: string) {
    console.log('Tag clicked:', tag);
  }
}
