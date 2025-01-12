import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaymentStatusReportsComponent } from './invoice-payment-status-reports.component';

describe('InvoicePaymentStatusReportsComponent', () => {
  let component: InvoicePaymentStatusReportsComponent;
  let fixture: ComponentFixture<InvoicePaymentStatusReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicePaymentStatusReportsComponent]
    });
    fixture = TestBed.createComponent(InvoicePaymentStatusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
