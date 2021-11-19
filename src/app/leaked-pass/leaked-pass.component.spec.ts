import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeakedPassComponent } from './leaked-pass.component';

describe('LeakedPassComponent', () => {
  let component: LeakedPassComponent;
  let fixture: ComponentFixture<LeakedPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeakedPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeakedPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
