import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcInspectionsComponent } from './qc-inspections.component';

describe('QcInspectionsComponent', () => {
  let component: QcInspectionsComponent;
  let fixture: ComponentFixture<QcInspectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcInspectionsComponent]
    });
    fixture = TestBed.createComponent(QcInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
