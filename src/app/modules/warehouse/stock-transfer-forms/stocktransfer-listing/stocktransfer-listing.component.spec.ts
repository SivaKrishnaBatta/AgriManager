import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktransferListingComponent } from './stocktransfer-listing.component';

describe('StocktransferListingComponent', () => {
  let component: StocktransferListingComponent;
  let fixture: ComponentFixture<StocktransferListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StocktransferListingComponent]
    });
    fixture = TestBed.createComponent(StocktransferListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
