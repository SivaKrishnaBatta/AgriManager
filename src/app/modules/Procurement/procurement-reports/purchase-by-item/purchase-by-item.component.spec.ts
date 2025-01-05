import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseByItemComponent } from './purchase-by-item.component';

describe('PurchaseByItemComponent', () => {
  let component: PurchaseByItemComponent;
  let fixture: ComponentFixture<PurchaseByItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseByItemComponent]
    });
    fixture = TestBed.createComponent(PurchaseByItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
