import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratikComponent } from './pratik.component';

describe('PratikComponent', () => {
  let component: PratikComponent;
  let fixture: ComponentFixture<PratikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PratikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
