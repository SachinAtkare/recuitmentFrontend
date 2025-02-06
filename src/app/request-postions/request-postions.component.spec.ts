import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPostionsComponent } from './request-postions.component';

describe('RequestPostionsComponent', () => {
  let component: RequestPostionsComponent;
  let fixture: ComponentFixture<RequestPostionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestPostionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestPostionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
