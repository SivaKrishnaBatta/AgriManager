import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticReportMainComponent } from './logistic-report-main.component';

describe('LogisticReportMainComponent', () => {
  let component: LogisticReportMainComponent;
  let fixture: ComponentFixture<LogisticReportMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticReportMainComponent]
    });
    fixture = TestBed.createComponent(LogisticReportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
