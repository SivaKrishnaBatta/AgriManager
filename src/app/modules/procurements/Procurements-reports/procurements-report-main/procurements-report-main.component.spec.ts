import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementsReportMainComponent } from './procurements-report-main.component';

describe('ProcurementsReportMainComponent', () => {
  let component: ProcurementsReportMainComponent;
  let fixture: ComponentFixture<ProcurementsReportMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcurementsReportMainComponent]
    });
    fixture = TestBed.createComponent(ProcurementsReportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
