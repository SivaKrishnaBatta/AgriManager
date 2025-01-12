import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesListingComponent } from './sales-listing.component';

describe('SalesListingComponent', () => {
  let component: SalesListingComponent;
  let fixture: ComponentFixture<SalesListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesListingComponent]
    });
    fixture = TestBed.createComponent(SalesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
