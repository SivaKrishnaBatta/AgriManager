import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionListingComponent } from './production-listing.component';

describe('ProductionListingComponent', () => {
  let component: ProductionListingComponent;
  let fixture: ComponentFixture<ProductionListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionListingComponent]
    });
    fixture = TestBed.createComponent(ProductionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
