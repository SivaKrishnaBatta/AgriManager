import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMemoListingComponent } from './credit-memo-listing.component';

describe('CreditMemoListingComponent', () => {
  let component: CreditMemoListingComponent;
  let fixture: ComponentFixture<CreditMemoListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditMemoListingComponent]
    });
    fixture = TestBed.createComponent(CreditMemoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
