import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockReportSummaryComponent } from './stock-report-summary.component';

describe('StockReportSummaryComponent', () => {
  let component: StockReportSummaryComponent;
  let fixture: ComponentFixture<StockReportSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockReportSummaryComponent]
    });
    fixture = TestBed.createComponent(StockReportSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
