import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotListingComponent } from './lot-listing.component';

describe('LotListingComponent', () => {
  let component: LotListingComponent;
  let fixture: ComponentFixture<LotListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotListingComponent]
    });
    fixture = TestBed.createComponent(LotListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
