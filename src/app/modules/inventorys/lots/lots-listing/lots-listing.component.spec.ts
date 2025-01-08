import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotsListingComponent } from './lots-listing.component';

describe('LotsListingComponent', () => {
  let component: LotsListingComponent;
  let fixture: ComponentFixture<LotsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotsListingComponent]
    });
    fixture = TestBed.createComponent(LotsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
