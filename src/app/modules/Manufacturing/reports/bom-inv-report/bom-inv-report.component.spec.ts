import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomInvReportComponent } from './bom-inv-report.component';

describe('BomInvReportComponent', () => {
  let component: BomInvReportComponent;
  let fixture: ComponentFixture<BomInvReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomInvReportComponent]
    });
    fixture = TestBed.createComponent(BomInvReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
