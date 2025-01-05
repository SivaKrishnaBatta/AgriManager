import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionScheduleReportComponent } from './production-schedule-report.component';

describe('ProductionScheduleReportComponent', () => {
  let component: ProductionScheduleReportComponent;
  let fixture: ComponentFixture<ProductionScheduleReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionScheduleReportComponent]
    });
    fixture = TestBed.createComponent(ProductionScheduleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
