import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDeliveryComponent } from './items-delivery.component';

describe('ItemsDeliveryComponent', () => {
  let component: ItemsDeliveryComponent;
  let fixture: ComponentFixture<ItemsDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsDeliveryComponent]
    });
    fixture = TestBed.createComponent(ItemsDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
