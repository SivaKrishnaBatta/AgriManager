import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseListingComponent } from './warehouse-listing.component';

describe('WarehouseListingComponent', () => {
  let component: WarehouseListingComponent;
  let fixture: ComponentFixture<WarehouseListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseListingComponent]
    });
    fixture = TestBed.createComponent(WarehouseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
