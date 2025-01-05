import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSoBreakdownComponent } from './dashboard-so-breakdown.component';

describe('DashboardSoBreakdownComponent', () => {
  let component: DashboardSoBreakdownComponent;
  let fixture: ComponentFixture<DashboardSoBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSoBreakdownComponent]
    });
    fixture = TestBed.createComponent(DashboardSoBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
