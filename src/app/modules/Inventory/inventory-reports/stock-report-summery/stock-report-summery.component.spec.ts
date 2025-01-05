import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockReportSummeryComponent } from './stock-report-summery.component';

describe('StockReportSummeryComponent', () => {
  let component: StockReportSummeryComponent;
  let fixture: ComponentFixture<StockReportSummeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockReportSummeryComponent]
    });
    fixture = TestBed.createComponent(StockReportSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
