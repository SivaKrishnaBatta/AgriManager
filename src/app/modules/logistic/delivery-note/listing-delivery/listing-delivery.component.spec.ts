import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDeliveryComponent } from './listing-delivery.component';

describe('ListingDeliveryComponent', () => {
  let component: ListingDeliveryComponent;
  let fixture: ComponentFixture<ListingDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingDeliveryComponent]
    });
    fixture = TestBed.createComponent(ListingDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
