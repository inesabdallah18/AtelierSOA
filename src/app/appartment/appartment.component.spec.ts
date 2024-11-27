import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentComponent } from './appartment.component';

describe('AppartmentComponent', () => {
  let component: AppartmentComponent;
  let fixture: ComponentFixture<AppartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartmentComponent]
    });
    fixture = TestBed.createComponent(AppartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
