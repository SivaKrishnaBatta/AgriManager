import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnsListingComponent } from './s-returns-listing.component';

describe('SReturnsListingComponent', () => {
  let component: SReturnsListingComponent;
  let fixture: ComponentFixture<SReturnsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnsListingComponent]
    });
    fixture = TestBed.createComponent(SReturnsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
