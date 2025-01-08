import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersDeatilsComponent } from './purchase-orders-deatils.component';

describe('PurchaseOrdersDeatilsComponent', () => {
  let component: PurchaseOrdersDeatilsComponent;
  let fixture: ComponentFixture<PurchaseOrdersDeatilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseOrdersDeatilsComponent]
    });
    fixture = TestBed.createComponent(PurchaseOrdersDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
