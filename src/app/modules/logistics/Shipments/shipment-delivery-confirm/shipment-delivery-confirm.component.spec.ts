import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDeliveryConfirmComponent } from './shipment-delivery-confirm.component';

describe('ShipmentDeliveryConfirmComponent', () => {
  let component: ShipmentDeliveryConfirmComponent;
  let fixture: ComponentFixture<ShipmentDeliveryConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentDeliveryConfirmComponent]
    });
    fixture = TestBed.createComponent(ShipmentDeliveryConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
