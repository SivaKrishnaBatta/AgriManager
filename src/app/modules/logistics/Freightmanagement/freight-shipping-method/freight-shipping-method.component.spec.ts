import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightShippingMethodComponent } from './freight-shipping-method.component';

describe('FreightShippingMethodComponent', () => {
  let component: FreightShippingMethodComponent;
  let fixture: ComponentFixture<FreightShippingMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreightShippingMethodComponent]
    });
    fixture = TestBed.createComponent(FreightShippingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
