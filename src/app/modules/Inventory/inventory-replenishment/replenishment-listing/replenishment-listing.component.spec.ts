import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplenishmentListingComponent } from './replenishment-listing.component';

describe('ReplenishmentListingComponent', () => {
  let component: ReplenishmentListingComponent;
  let fixture: ComponentFixture<ReplenishmentListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplenishmentListingComponent]
    });
    fixture = TestBed.createComponent(ReplenishmentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
