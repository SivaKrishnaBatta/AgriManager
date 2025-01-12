import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPrintComponent } from './return-print.component';

describe('ReturnPrintComponent', () => {
  let component: ReturnPrintComponent;
  let fixture: ComponentFixture<ReturnPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnPrintComponent]
    });
    fixture = TestBed.createComponent(ReturnPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
