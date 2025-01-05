import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDetailListingComponent } from './inv-detail-listing.component';

describe('InvDetailListingComponent', () => {
  let component: InvDetailListingComponent;
  let fixture: ComponentFixture<InvDetailListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvDetailListingComponent]
    });
    fixture = TestBed.createComponent(InvDetailListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
