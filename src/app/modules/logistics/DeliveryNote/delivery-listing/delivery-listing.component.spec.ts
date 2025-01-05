import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryListingComponent } from './delivery-listing.component';

describe('DeliveryListingComponent', () => {
  let component: DeliveryListingComponent;
  let fixture: ComponentFixture<DeliveryListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryListingComponent]
    });
    fixture = TestBed.createComponent(DeliveryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
