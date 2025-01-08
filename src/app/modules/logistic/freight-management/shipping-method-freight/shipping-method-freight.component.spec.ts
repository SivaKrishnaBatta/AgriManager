import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingMethodFreightComponent } from './shipping-method-freight.component';

describe('ShippingMethodFreightComponent', () => {
  let component: ShippingMethodFreightComponent;
  let fixture: ComponentFixture<ShippingMethodFreightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingMethodFreightComponent]
    });
    fixture = TestBed.createComponent(ShippingMethodFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
