import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2FeedbackComponent } from './l2-feedback.component';

describe('L2FeedbackComponent', () => {
  let component: L2FeedbackComponent;
  let fixture: ComponentFixture<L2FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L2FeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L2FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
