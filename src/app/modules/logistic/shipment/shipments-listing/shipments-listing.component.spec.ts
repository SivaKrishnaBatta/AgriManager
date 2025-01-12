import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsListingComponent } from './shipments-listing.component';

describe('ShipmentsListingComponent', () => {
  let component: ShipmentsListingComponent;
  let fixture: ComponentFixture<ShipmentsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentsListingComponent]
    });
    fixture = TestBed.createComponent(ShipmentsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
