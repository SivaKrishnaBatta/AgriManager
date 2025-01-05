import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFulfillmentReportComponent } from './order-fulfillment-report.component';

describe('OrderFulfillmentReportComponent', () => {
  let component: OrderFulfillmentReportComponent;
  let fixture: ComponentFixture<OrderFulfillmentReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderFulfillmentReportComponent]
    });
    fixture = TestBed.createComponent(OrderFulfillmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
