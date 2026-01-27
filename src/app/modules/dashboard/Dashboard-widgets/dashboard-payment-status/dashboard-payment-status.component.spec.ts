import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPaymentStatusComponent } from './dashboard-payment-status.component';

describe('DashboardPaymentStatusComponent', () => {
  let component: DashboardPaymentStatusComponent;
  let fixture: ComponentFixture<DashboardPaymentStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPaymentStatusComponent]
    });
    fixture = TestBed.createComponent(DashboardPaymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
