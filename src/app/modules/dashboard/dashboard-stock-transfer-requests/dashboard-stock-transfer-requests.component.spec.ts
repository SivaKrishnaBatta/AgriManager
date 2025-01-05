import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStockTransferRequestsComponent } from './dashboard-stock-transfer-requests.component';

describe('DashboardStockTransferRequestsComponent', () => {
  let component: DashboardStockTransferRequestsComponent;
  let fixture: ComponentFixture<DashboardStockTransferRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStockTransferRequestsComponent]
    });
    fixture = TestBed.createComponent(DashboardStockTransferRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
