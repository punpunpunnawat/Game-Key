import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-game-tag-menu',
  imports: [],
  templateUrl: './game-tag-menu.html',
  styleUrl: './game-tag-menu.css',
})
export class GameTagMenu {
  // รับ tags จาก parent
  tagsName = input<string[]>([]);

  // ส่ง event กลับไปหา parent
  tagSelected = output<string>();

  onTagClick(tag: string) {
    this.tagSelected.emit(tag);
  }
}
