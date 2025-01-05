import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentModeComponent } from './admin-payment-mode.component';

describe('AdminPaymentModeComponent', () => {
  let component: AdminPaymentModeComponent;
  let fixture: ComponentFixture<AdminPaymentModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPaymentModeComponent]
    });
    fixture = TestBed.createComponent(AdminPaymentModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
