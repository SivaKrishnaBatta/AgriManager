import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderVendorComponent } from './purchase-order-vendor.component';

describe('PurchaseOrderVendorComponent', () => {
  let component: PurchaseOrderVendorComponent;
  let fixture: ComponentFixture<PurchaseOrderVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseOrderVendorComponent]
    });
    fixture = TestBed.createComponent(PurchaseOrderVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
