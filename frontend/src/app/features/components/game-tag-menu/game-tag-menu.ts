import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-game-tag-menu',
  imports: [],
  templateUrl: './game-tag-menu.html',
  styleUrl: './game-tag-menu.css',
})
export class GameTagMenu {
  // get tags from parent
  tagsName = input<string[]>([]);

  // sent event to parent
  tagSelected = output<string>();

  onTagClick(tag: string) {
    this.tagSelected.emit(tag);
  }
}
