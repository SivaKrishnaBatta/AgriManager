import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReportsMainComponent } from './order-reports-main.component';

describe('OrderReportsMainComponent', () => {
  let component: OrderReportsMainComponent;
  let fixture: ComponentFixture<OrderReportsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderReportsMainComponent]
    });
    fixture = TestBed.createComponent(OrderReportsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
