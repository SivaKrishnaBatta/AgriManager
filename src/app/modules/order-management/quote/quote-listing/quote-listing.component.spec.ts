import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteListingComponent } from './quote-listing.component';

describe('QuoteListingComponent', () => {
  let component: QuoteListingComponent;
  let fixture: ComponentFixture<QuoteListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteListingComponent]
    });
    fixture = TestBed.createComponent(QuoteListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
