import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesListingComponent } from './quotes-listing.component';

describe('QuotesListingComponent', () => {
  let component: QuotesListingComponent;
  let fixture: ComponentFixture<QuotesListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesListingComponent]
    });
    fixture = TestBed.createComponent(QuotesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
