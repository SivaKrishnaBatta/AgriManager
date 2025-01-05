import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSupplierReturnComponent } from './supplier-supplier-return.component';

describe('SupplierSupplierReturnComponent', () => {
  let component: SupplierSupplierReturnComponent;
  let fixture: ComponentFixture<SupplierSupplierReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierSupplierReturnComponent]
    });
    fixture = TestBed.createComponent(SupplierSupplierReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
