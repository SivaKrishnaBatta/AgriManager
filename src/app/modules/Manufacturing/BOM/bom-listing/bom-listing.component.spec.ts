import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomListingComponent } from './bom-listing.component';

describe('BomListingComponent', () => {
  let component: BomListingComponent;
  let fixture: ComponentFixture<BomListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomListingComponent]
    });
    fixture = TestBed.createComponent(BomListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
