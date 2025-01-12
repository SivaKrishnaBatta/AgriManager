import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomInvReportsComponent } from './bom-inv-reports.component';

describe('BomInvReportsComponent', () => {
  let component: BomInvReportsComponent;
  let fixture: ComponentFixture<BomInvReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomInvReportsComponent]
    });
    fixture = TestBed.createComponent(BomInvReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
