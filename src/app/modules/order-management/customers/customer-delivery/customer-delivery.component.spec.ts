import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeliveryComponent } from './customer-delivery.component';

describe('CustomerDeliveryComponent', () => {
  let component: CustomerDeliveryComponent;
  let fixture: ComponentFixture<CustomerDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDeliveryComponent]
    });
    fixture = TestBed.createComponent(CustomerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
