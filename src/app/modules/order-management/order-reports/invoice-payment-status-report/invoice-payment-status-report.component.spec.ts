import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaymentStatusReportComponent } from './invoice-payment-status-report.component';

describe('InvoicePaymentStatusReportComponent', () => {
  let component: InvoicePaymentStatusReportComponent;
  let fixture: ComponentFixture<InvoicePaymentStatusReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicePaymentStatusReportComponent]
    });
    fixture = TestBed.createComponent(InvoicePaymentStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
