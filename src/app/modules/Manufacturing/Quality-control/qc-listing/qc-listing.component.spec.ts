import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcListingComponent } from './qc-listing.component';

describe('QcListingComponent', () => {
  let component: QcListingComponent;
  let fixture: ComponentFixture<QcListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcListingComponent]
    });
    fixture = TestBed.createComponent(QcListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
