import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersVendorComponent } from './purchase-orders-vendor.component';

describe('PurchaseOrdersVendorComponent', () => {
  let component: PurchaseOrdersVendorComponent;
  let fixture: ComponentFixture<PurchaseOrdersVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseOrdersVendorComponent]
    });
    fixture = TestBed.createComponent(PurchaseOrdersVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
