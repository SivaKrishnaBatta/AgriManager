import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAdjustmentListingComponent } from './stock-adjustment-listing.component';

describe('StockAdjustmentListingComponent', () => {
  let component: StockAdjustmentListingComponent;
  let fixture: ComponentFixture<StockAdjustmentListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockAdjustmentListingComponent]
    });
    fixture = TestBed.createComponent(StockAdjustmentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
