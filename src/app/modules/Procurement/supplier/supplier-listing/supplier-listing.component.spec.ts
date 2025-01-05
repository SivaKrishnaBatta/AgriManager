import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierListingComponent } from './supplier-listing.component';

describe('SupplierListingComponent', () => {
  let component: SupplierListingComponent;
  let fixture: ComponentFixture<SupplierListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierListingComponent]
    });
    fixture = TestBed.createComponent(SupplierListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
