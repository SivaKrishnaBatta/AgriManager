import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionResultReportsComponent } from './inspection-result-reports.component';

describe('InspectionResultReportsComponent', () => {
  let component: InspectionResultReportsComponent;
  let fixture: ComponentFixture<InspectionResultReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectionResultReportsComponent]
    });
    fixture = TestBed.createComponent(InspectionResultReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
