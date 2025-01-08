import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentsModeComponent } from './admin-payments-mode.component';

describe('AdminPaymentsModeComponent', () => {
  let component: AdminPaymentsModeComponent;
  let fixture: ComponentFixture<AdminPaymentsModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPaymentsModeComponent]
    });
    fixture = TestBed.createComponent(AdminPaymentsModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
