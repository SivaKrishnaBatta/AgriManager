import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersSupplierReturnComponent } from './suppliers-supplier-return.component';

describe('SuppliersSupplierReturnComponent', () => {
  let component: SuppliersSupplierReturnComponent;
  let fixture: ComponentFixture<SuppliersSupplierReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliersSupplierReturnComponent]
    });
    fixture = TestBed.createComponent(SuppliersSupplierReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
