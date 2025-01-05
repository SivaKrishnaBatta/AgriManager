import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersMainComponent } from './work-orders-main.component';

describe('WorkOrdersMainComponent', () => {
  let component: WorkOrdersMainComponent;
  let fixture: ComponentFixture<WorkOrdersMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrdersMainComponent]
    });
    fixture = TestBed.createComponent(WorkOrdersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
