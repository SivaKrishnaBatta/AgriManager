import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderHistoryReportComponent } from './customer-order-history-report.component';

describe('CustomerOrderHistoryReportComponent', () => {
  let component: CustomerOrderHistoryReportComponent;
  let fixture: ComponentFixture<CustomerOrderHistoryReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerOrderHistoryReportComponent]
    });
    fixture = TestBed.createComponent(CustomerOrderHistoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
