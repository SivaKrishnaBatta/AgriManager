import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageStatusReportComponent } from './package-status-report.component';

describe('PackageStatusReportComponent', () => {
  let component: PackageStatusReportComponent;
  let fixture: ComponentFixture<PackageStatusReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageStatusReportComponent]
    });
    fixture = TestBed.createComponent(PackageStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
