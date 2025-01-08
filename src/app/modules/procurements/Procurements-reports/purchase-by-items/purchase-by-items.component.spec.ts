import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseByItemsComponent } from './purchase-by-items.component';

describe('PurchaseByItemsComponent', () => {
  let component: PurchaseByItemsComponent;
  let fixture: ComponentFixture<PurchaseByItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseByItemsComponent]
    });
    fixture = TestBed.createComponent(PurchaseByItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
