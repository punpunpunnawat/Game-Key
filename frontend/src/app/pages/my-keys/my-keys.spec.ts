import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKeys } from './my-keys';

describe('MyKeys', () => {
  let component: MyKeys;
  let fixture: ComponentFixture<MyKeys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyKeys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyKeys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
