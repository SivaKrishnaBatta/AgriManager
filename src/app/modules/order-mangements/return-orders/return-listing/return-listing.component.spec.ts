import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnListingComponent } from './return-listing.component';

describe('ReturnListingComponent', () => {
  let component: ReturnListingComponent;
  let fixture: ComponentFixture<ReturnListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnListingComponent]
    });
    fixture = TestBed.createComponent(ReturnListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
