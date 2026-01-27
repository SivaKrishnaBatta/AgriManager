import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMultilinechartComponent } from './dashboard-multilinechart.component';

describe('DashboardMultilinechartComponent', () => {
  let component: DashboardMultilinechartComponent;
  let fixture: ComponentFixture<DashboardMultilinechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMultilinechartComponent]
    });
    fixture = TestBed.createComponent(DashboardMultilinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
