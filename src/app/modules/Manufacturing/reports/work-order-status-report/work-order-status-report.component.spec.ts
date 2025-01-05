import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderStatusReportComponent } from './work-order-status-report.component';

describe('WorkOrderStatusReportComponent', () => {
  let component: WorkOrderStatusReportComponent;
  let fixture: ComponentFixture<WorkOrderStatusReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrderStatusReportComponent]
    });
    fixture = TestBed.createComponent(WorkOrderStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
