import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsMemoListingComponent } from './credits-memo-listing.component';

describe('CreditsMemoListingComponent', () => {
  let component: CreditsMemoListingComponent;
  let fixture: ComponentFixture<CreditsMemoListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditsMemoListingComponent]
    });
    fixture = TestBed.createComponent(CreditsMemoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
