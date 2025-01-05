import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderSummaryComponent } from './sales-order-summary.component';

describe('SalesOrderSummaryComponent', () => {
  let component: SalesOrderSummaryComponent;
  let fixture: ComponentFixture<SalesOrderSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesOrderSummaryComponent]
    });
    fixture = TestBed.createComponent(SalesOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
