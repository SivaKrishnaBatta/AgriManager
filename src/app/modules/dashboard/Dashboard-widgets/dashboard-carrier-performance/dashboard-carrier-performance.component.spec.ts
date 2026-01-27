import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCarrierPerformanceComponent } from './dashboard-carrier-performance.component';

describe('DashboardCarrierPerformanceComponent', () => {
  let component: DashboardCarrierPerformanceComponent;
  let fixture: ComponentFixture<DashboardCarrierPerformanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCarrierPerformanceComponent]
    });
    fixture = TestBed.createComponent(DashboardCarrierPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
