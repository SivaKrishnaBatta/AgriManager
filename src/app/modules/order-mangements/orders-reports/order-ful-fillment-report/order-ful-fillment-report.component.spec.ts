import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFulFillmentReportComponent } from './order-ful-fillment-report.component';

describe('OrderFulFillmentReportComponent', () => {
  let component: OrderFulFillmentReportComponent;
  let fixture: ComponentFixture<OrderFulFillmentReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderFulFillmentReportComponent]
    });
    fixture = TestBed.createComponent(OrderFulFillmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
