import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomsListingComponent } from './boms-listing.component';

describe('BomsListingComponent', () => {
  let component: BomsListingComponent;
  let fixture: ComponentFixture<BomsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomsListingComponent]
    });
    fixture = TestBed.createComponent(BomsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
