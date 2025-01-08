import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvReportMainComponent } from './inv-report-main.component';

describe('InvReportMainComponent', () => {
  let component: InvReportMainComponent;
  let fixture: ComponentFixture<InvReportMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvReportMainComponent]
    });
    fixture = TestBed.createComponent(InvReportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
