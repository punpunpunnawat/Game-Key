import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTagMenu } from './game-tag-menu';

describe('GameTagMenu', () => {
  let component: GameTagMenu;
  let fixture: ComponentFixture<GameTagMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTagMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTagMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
