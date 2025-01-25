import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JagdishComponent } from './jagdish.component';

describe('JagdishComponent', () => {
  let component: JagdishComponent;
  let fixture: ComponentFixture<JagdishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JagdishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JagdishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
