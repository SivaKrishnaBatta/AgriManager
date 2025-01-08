import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDetailsListingComponent } from './inv-details-listing.component';

describe('InvDetailsListingComponent', () => {
  let component: InvDetailsListingComponent;
  let fixture: ComponentFixture<InvDetailsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvDetailsListingComponent]
    });
    fixture = TestBed.createComponent(InvDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
