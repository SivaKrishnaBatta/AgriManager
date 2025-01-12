import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOrderAnalysisReportsComponent } from './return-order-analysis-reports.component';

describe('ReturnOrderAnalysisReportsComponent', () => {
  let component: ReturnOrderAnalysisReportsComponent;
  let fixture: ComponentFixture<ReturnOrderAnalysisReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnOrderAnalysisReportsComponent]
    });
    fixture = TestBed.createComponent(ReturnOrderAnalysisReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
