import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesListingComponent } from './invoices-listing.component';

describe('InvoicesListingComponent', () => {
  let component: InvoicesListingComponent;
  let fixture: ComponentFixture<InvoicesListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicesListingComponent]
    });
    fixture = TestBed.createComponent(InvoicesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
