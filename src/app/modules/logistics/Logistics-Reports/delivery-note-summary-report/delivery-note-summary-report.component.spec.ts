import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryNoteSummaryReportComponent } from './delivery-note-summary-report.component';

describe('DeliveryNoteSummaryReportComponent', () => {
  let component: DeliveryNoteSummaryReportComponent;
  let fixture: ComponentFixture<DeliveryNoteSummaryReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryNoteSummaryReportComponent]
    });
    fixture = TestBed.createComponent(DeliveryNoteSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
