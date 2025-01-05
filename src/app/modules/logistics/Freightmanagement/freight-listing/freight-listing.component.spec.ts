import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightListingComponent } from './freight-listing.component';

describe('FreightListingComponent', () => {
  let component: FreightListingComponent;
  let fixture: ComponentFixture<FreightListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreightListingComponent]
    });
    fixture = TestBed.createComponent(FreightListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
