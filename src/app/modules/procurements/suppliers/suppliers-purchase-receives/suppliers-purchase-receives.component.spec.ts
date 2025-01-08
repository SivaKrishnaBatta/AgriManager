import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersPurchaseReceivesComponent } from './suppliers-purchase-receives.component';

describe('SuppliersPurchaseReceivesComponent', () => {
  let component: SuppliersPurchaseReceivesComponent;
  let fixture: ComponentFixture<SuppliersPurchaseReceivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliersPurchaseReceivesComponent]
    });
    fixture = TestBed.createComponent(SuppliersPurchaseReceivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
