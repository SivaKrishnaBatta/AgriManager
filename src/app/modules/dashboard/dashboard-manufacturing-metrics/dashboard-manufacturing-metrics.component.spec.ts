import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardManufacturingMetricsComponent } from './dashboard-manufacturing-metrics.component';

describe('DashboardManufacturingMetricsComponent', () => {
  let component: DashboardManufacturingMetricsComponent;
  let fixture: ComponentFixture<DashboardManufacturingMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardManufacturingMetricsComponent]
    });
    fixture = TestBed.createComponent(DashboardManufacturingMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
