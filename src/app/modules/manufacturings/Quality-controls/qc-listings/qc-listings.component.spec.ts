import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcListingsComponent } from './qc-listings.component';

describe('QcListingsComponent', () => {
  let component: QcListingsComponent;
  let fixture: ComponentFixture<QcListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcListingsComponent]
    });
    fixture = TestBed.createComponent(QcListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
