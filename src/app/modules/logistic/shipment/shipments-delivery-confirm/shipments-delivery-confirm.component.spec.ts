import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsDeliveryConfirmComponent } from './shipments-delivery-confirm.component';

describe('ShipmentsDeliveryConfirmComponent', () => {
  let component: ShipmentsDeliveryConfirmComponent;
  let fixture: ComponentFixture<ShipmentsDeliveryConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentsDeliveryConfirmComponent]
    });
    fixture = TestBed.createComponent(ShipmentsDeliveryConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
