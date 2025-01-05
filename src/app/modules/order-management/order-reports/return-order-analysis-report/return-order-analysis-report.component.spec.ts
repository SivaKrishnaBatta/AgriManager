import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOrderAnalysisReportComponent } from './return-order-analysis-report.component';

describe('ReturnOrderAnalysisReportComponent', () => {
  let component: ReturnOrderAnalysisReportComponent;
  let fixture: ComponentFixture<ReturnOrderAnalysisReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnOrderAnalysisReportComponent]
    });
    fixture = TestBed.createComponent(ReturnOrderAnalysisReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
