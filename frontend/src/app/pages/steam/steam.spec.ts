import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Steam } from './steam';

describe('Steam', () => {
  let component: Steam;
  let fixture: ComponentFixture<Steam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Steam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Steam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
