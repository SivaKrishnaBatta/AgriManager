import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionsListingComponent } from './productions-listing.component';

describe('ProductionsListingComponent', () => {
  let component: ProductionsListingComponent;
  let fixture: ComponentFixture<ProductionsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionsListingComponent]
    });
    fixture = TestBed.createComponent(ProductionsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
