import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoListingComponent } from './ro-listing.component';

describe('RoListingComponent', () => {
  let component: RoListingComponent;
  let fixture: ComponentFixture<RoListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoListingComponent]
    });
    fixture = TestBed.createComponent(RoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
