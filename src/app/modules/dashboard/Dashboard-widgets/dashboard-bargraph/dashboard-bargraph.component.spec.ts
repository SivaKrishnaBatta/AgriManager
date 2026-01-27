import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBargraphComponent } from './dashboard-bargraph.component';

describe('DashboardBargraphComponent', () => {
  let component: DashboardBargraphComponent;
  let fixture: ComponentFixture<DashboardBargraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBargraphComponent]
    });
    fixture = TestBed.createComponent(DashboardBargraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
