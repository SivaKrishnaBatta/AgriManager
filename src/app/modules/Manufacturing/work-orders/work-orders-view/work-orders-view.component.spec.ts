import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersViewComponent } from './work-orders-view.component';

describe('WorkOrdersViewComponent', () => {
  let component: WorkOrdersViewComponent;
  let fixture: ComponentFixture<WorkOrdersViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrdersViewComponent]
    });
    fixture = TestBed.createComponent(WorkOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
