import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDoughnutComponent } from './dashboard-doughnut.component';

describe('DashboardDoughnutComponent', () => {
  let component: DashboardDoughnutComponent;
  let fixture: ComponentFixture<DashboardDoughnutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDoughnutComponent]
    });
    fixture = TestBed.createComponent(DashboardDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
