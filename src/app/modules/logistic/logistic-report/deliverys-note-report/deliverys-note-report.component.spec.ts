import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverysNoteReportComponent } from './deliverys-note-report.component';

describe('DeliverysNoteReportComponent', () => {
  let component: DeliverysNoteReportComponent;
  let fixture: ComponentFixture<DeliverysNoteReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverysNoteReportComponent]
    });
    fixture = TestBed.createComponent(DeliverysNoteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
