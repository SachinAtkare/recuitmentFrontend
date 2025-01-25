import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushikeshComponent } from './rushikesh.component';

describe('RushikeshComponent', () => {
  let component: RushikeshComponent;
  let fixture: ComponentFixture<RushikeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RushikeshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RushikeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
