import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingReportMainComponent } from './manufacturing-report-main.component';

describe('ManufacturingReportMainComponent', () => {
  let component: ManufacturingReportMainComponent;
  let fixture: ComponentFixture<ManufacturingReportMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturingReportMainComponent]
    });
    fixture = TestBed.createComponent(ManufacturingReportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
