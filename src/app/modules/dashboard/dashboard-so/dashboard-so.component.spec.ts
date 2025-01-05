import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSoComponent } from './dashboard-so.component';

describe('DashboardSoComponent', () => {
  let component: DashboardSoComponent;
  let fixture: ComponentFixture<DashboardSoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSoComponent]
    });
    fixture = TestBed.createComponent(DashboardSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
