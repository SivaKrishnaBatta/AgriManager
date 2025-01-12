import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReportMainsComponent } from './order-report-mains.component';

describe('OrderReportMainsComponent', () => {
  let component: OrderReportMainsComponent;
  let fixture: ComponentFixture<OrderReportMainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderReportMainsComponent]
    });
    fixture = TestBed.createComponent(OrderReportMainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
