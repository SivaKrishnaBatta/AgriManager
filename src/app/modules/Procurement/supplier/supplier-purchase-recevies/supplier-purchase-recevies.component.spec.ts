import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPurchaseReceviesComponent } from './supplier-purchase-recevies.component';

describe('SupplierPurchaseReceviesComponent', () => {
  let component: SupplierPurchaseReceviesComponent;
  let fixture: ComponentFixture<SupplierPurchaseReceviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierPurchaseReceviesComponent]
    });
    fixture = TestBed.createComponent(SupplierPurchaseReceviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
