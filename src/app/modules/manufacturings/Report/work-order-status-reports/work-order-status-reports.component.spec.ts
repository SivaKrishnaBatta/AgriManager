import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderStatusReportsComponent } from './work-order-status-reports.component';

describe('WorkOrderStatusReportsComponent', () => {
  let component: WorkOrderStatusReportsComponent;
  let fixture: ComponentFixture<WorkOrderStatusReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrderStatusReportsComponent]
    });
    fixture = TestBed.createComponent(WorkOrderStatusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
