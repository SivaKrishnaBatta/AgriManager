import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesStatusReportComponent } from './packages-status-report.component';

describe('PackagesStatusReportComponent', () => {
  let component: PackagesStatusReportComponent;
  let fixture: ComponentFixture<PackagesStatusReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesStatusReportComponent]
    });
    fixture = TestBed.createComponent(PackagesStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
