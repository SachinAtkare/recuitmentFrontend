import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewAssignersComponent } from './interview-assigners.component';

describe('InterviewAssignersComponent', () => {
  let component: InterviewAssignersComponent;
  let fixture: ComponentFixture<InterviewAssignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewAssignersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewAssignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
