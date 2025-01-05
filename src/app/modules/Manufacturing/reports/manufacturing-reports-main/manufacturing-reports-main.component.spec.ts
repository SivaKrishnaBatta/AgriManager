import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingReportsMainComponent } from './manufacturing-reports-main.component';

describe('ManufacturingReportsMainComponent', () => {
  let component: ManufacturingReportsMainComponent;
  let fixture: ComponentFixture<ManufacturingReportsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturingReportsMainComponent]
    });
    fixture = TestBed.createComponent(ManufacturingReportsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
