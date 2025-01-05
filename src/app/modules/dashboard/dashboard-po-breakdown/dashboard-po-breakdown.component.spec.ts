import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPoBreakdownComponent } from './dashboard-po-breakdown.component';

describe('DashboardPoBreakdownComponent', () => {
  let component: DashboardPoBreakdownComponent;
  let fixture: ComponentFixture<DashboardPoBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPoBreakdownComponent]
    });
    fixture = TestBed.createComponent(DashboardPoBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
