import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderMainComponent } from './work-order-main.component';

describe('WorkOrderMainComponent', () => {
  let component: WorkOrderMainComponent;
  let fixture: ComponentFixture<WorkOrderMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrderMainComponent]
    });
    fixture = TestBed.createComponent(WorkOrderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
