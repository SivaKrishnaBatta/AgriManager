import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductionPriorityComponent } from './admin-production-priority.component';

describe('AdminProductionPriorityComponent', () => {
  let component: AdminProductionPriorityComponent;
  let fixture: ComponentFixture<AdminProductionPriorityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductionPriorityComponent]
    });
    fixture = TestBed.createComponent(AdminProductionPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
