import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersListingComponent } from './suppliers-listing.component';

describe('SuppliersListingComponent', () => {
  let component: SuppliersListingComponent;
  let fixture: ComponentFixture<SuppliersListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliersListingComponent]
    });
    fixture = TestBed.createComponent(SuppliersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
