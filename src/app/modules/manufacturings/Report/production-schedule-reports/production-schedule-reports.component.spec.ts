import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionScheduleReportsComponent } from './production-schedule-reports.component';

describe('ProductionScheduleReportsComponent', () => {
  let component: ProductionScheduleReportsComponent;
  let fixture: ComponentFixture<ProductionScheduleReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionScheduleReportsComponent]
    });
    fixture = TestBed.createComponent(ProductionScheduleReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
