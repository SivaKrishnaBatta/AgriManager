import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderSummerysComponent } from './sales-order-summerys.component';

describe('SalesOrderSummerysComponent', () => {
  let component: SalesOrderSummerysComponent;
  let fixture: ComponentFixture<SalesOrderSummerysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesOrderSummerysComponent]
    });
    fixture = TestBed.createComponent(SalesOrderSummerysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
