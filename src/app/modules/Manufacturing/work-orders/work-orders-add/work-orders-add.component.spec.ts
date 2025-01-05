import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersAddComponent } from './work-orders-add.component';

describe('WorkOrdersAddComponent', () => {
  let component: WorkOrdersAddComponent;
  let fixture: ComponentFixture<WorkOrdersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrdersAddComponent]
    });
    fixture = TestBed.createComponent(WorkOrdersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
