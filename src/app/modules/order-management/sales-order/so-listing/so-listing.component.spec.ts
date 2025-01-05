import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoListingComponent } from './so-listing.component';

describe('SoListingComponent', () => {
  let component: SoListingComponent;
  let fixture: ComponentFixture<SoListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoListingComponent]
    });
    fixture = TestBed.createComponent(SoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
