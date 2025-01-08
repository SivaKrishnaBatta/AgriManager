import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksListingComponent } from './stocks-listing.component';

describe('StocksListingComponent', () => {
  let component: StocksListingComponent;
  let fixture: ComponentFixture<StocksListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StocksListingComponent]
    });
    fixture = TestBed.createComponent(StocksListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
