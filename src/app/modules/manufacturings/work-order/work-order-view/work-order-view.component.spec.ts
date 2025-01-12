import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderViewComponent } from './work-order-view.component';

describe('WorkOrderViewComponent', () => {
  let component: WorkOrderViewComponent;
  let fixture: ComponentFixture<WorkOrderViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrderViewComponent]
    });
    fixture = TestBed.createComponent(WorkOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
