import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2StatusComponent } from './l2-status.component';

describe('L2StatusComponent', () => {
  let component: L2StatusComponent;
  let fixture: ComponentFixture<L2StatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L2StatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L2StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
