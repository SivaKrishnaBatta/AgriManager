import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersPurchaseOrderComponent } from './suppliers-purchase-order.component';

describe('SuppliersPurchaseOrderComponent', () => {
  let component: SuppliersPurchaseOrderComponent;
  let fixture: ComponentFixture<SuppliersPurchaseOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliersPurchaseOrderComponent]
    });
    fixture = TestBed.createComponent(SuppliersPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
