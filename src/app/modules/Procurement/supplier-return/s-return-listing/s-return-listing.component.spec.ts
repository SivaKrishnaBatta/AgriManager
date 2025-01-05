import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnListingComponent } from './s-return-listing.component';

describe('SReturnListingComponent', () => {
  let component: SReturnListingComponent;
  let fixture: ComponentFixture<SReturnListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnListingComponent]
    });
    fixture = TestBed.createComponent(SReturnListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
