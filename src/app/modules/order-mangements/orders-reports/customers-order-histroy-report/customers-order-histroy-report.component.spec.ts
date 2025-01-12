import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersOrderHistroyReportComponent } from './customers-order-histroy-report.component';

describe('CustomersOrderHistroyReportComponent', () => {
  let component: CustomersOrderHistroyReportComponent;
  let fixture: ComponentFixture<CustomersOrderHistroyReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersOrderHistroyReportComponent]
    });
    fixture = TestBed.createComponent(CustomersOrderHistroyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
