import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegNavComponent } from './reg-nav.component';

describe('RegNavComponent', () => {
  let component: RegNavComponent;
  let fixture: ComponentFixture<RegNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
