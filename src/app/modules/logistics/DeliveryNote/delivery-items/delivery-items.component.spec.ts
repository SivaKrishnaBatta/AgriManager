import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryItemsComponent } from './delivery-items.component';

describe('DeliveryItemsComponent', () => {
  let component: DeliveryItemsComponent;
  let fixture: ComponentFixture<DeliveryItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryItemsComponent]
    });
    fixture = TestBed.createComponent(DeliveryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
