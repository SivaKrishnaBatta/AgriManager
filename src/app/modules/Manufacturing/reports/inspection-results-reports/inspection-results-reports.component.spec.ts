import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionResultsReportsComponent } from './inspection-results-reports.component';

describe('InspectionResultsReportsComponent', () => {
  let component: InspectionResultsReportsComponent;
  let fixture: ComponentFixture<InspectionResultsReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectionResultsReportsComponent]
    });
    fixture = TestBed.createComponent(InspectionResultsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
