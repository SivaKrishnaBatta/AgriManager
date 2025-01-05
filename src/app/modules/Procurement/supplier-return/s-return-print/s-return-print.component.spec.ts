import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnPrintComponent } from './s-return-print.component';

describe('SReturnPrintComponent', () => {
  let component: SReturnPrintComponent;
  let fixture: ComponentFixture<SReturnPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnPrintComponent]
    });
    fixture = TestBed.createComponent(SReturnPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
