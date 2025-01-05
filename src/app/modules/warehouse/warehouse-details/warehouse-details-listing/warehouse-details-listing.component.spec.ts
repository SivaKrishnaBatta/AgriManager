import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseDetailsListingComponent } from './warehouse-details-listing.component';

describe('WarehouseDetailsListingComponent', () => {
  let component: WarehouseDetailsListingComponent;
  let fixture: ComponentFixture<WarehouseDetailsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseDetailsListingComponent]
    });
    fixture = TestBed.createComponent(WarehouseDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
