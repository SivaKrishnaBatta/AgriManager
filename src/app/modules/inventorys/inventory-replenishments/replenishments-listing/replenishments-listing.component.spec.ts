import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplenishmentsListingComponent } from './replenishments-listing.component';

describe('ReplenishmentsListingComponent', () => {
  let component: ReplenishmentsListingComponent;
  let fixture: ComponentFixture<ReplenishmentsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplenishmentsListingComponent]
    });
    fixture = TestBed.createComponent(ReplenishmentsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
