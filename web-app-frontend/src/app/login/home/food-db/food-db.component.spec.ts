import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDBComponent } from './food-db.component';

describe('FoodDBComponent', () => {
  let component: FoodDBComponent;
  let fixture: ComponentFixture<FoodDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
