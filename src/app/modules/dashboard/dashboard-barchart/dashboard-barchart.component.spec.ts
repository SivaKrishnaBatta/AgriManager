import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBarchartComponent } from './dashboard-barchart.component';

describe('DashboardBarchartComponent', () => {
  let component: DashboardBarchartComponent;
  let fixture: ComponentFixture<DashboardBarchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBarchartComponent]
    });
    fixture = TestBed.createComponent(DashboardBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
