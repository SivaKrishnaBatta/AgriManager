import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPieShipmentsComponent } from './dashboard-pie-shipments.component';

describe('DashboardPieShipmentsComponent', () => {
  let component: DashboardPieShipmentsComponent;
  let fixture: ComponentFixture<DashboardPieShipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPieShipmentsComponent]
    });
    fixture = TestBed.createComponent(DashboardPieShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
