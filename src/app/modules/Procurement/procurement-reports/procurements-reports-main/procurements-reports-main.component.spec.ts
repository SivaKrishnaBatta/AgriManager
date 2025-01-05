import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementsReportsMainComponent } from './procurements-reports-main.component';

describe('ProcurementsReportsMainComponent', () => {
  let component: ProcurementsReportsMainComponent;
  let fixture: ComponentFixture<ProcurementsReportsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcurementsReportsMainComponent]
    });
    fixture = TestBed.createComponent(ProcurementsReportsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
