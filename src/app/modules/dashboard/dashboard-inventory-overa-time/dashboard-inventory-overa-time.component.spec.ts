import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInventoryOveraTimeComponent } from './dashboard-inventory-overa-time.component';

describe('DashboardInventoryOveraTimeComponent', () => {
  let component: DashboardInventoryOveraTimeComponent;
  let fixture: ComponentFixture<DashboardInventoryOveraTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardInventoryOveraTimeComponent]
    });
    fixture = TestBed.createComponent(DashboardInventoryOveraTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
