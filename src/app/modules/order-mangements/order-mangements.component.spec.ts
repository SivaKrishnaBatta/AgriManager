import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMangementsComponent } from './order-mangements.component';

describe('OrderMangementsComponent', () => {
  let component: OrderMangementsComponent;
  let fixture: ComponentFixture<OrderMangementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderMangementsComponent]
    });
    fixture = TestBed.createComponent(OrderMangementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
