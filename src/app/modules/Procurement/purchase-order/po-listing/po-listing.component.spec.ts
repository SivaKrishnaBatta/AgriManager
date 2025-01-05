import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoListingComponent } from './po-listing.component';

describe('PoListingComponent', () => {
  let component: PoListingComponent;
  let fixture: ComponentFixture<PoListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoListingComponent]
    });
    fixture = TestBed.createComponent(PoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
