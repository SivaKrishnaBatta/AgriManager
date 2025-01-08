import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierPerformanceReportComponent } from './carrier-performance-report.component';

describe('CarrierPerformanceReportComponent', () => {
  let component: CarrierPerformanceReportComponent;
  let fixture: ComponentFixture<CarrierPerformanceReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrierPerformanceReportComponent]
    });
    fixture = TestBed.createComponent(CarrierPerformanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
