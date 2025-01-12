import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesPrintComponent } from './invoices-print.component';

describe('InvoicesPrintComponent', () => {
  let component: InvoicesPrintComponent;
  let fixture: ComponentFixture<InvoicesPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicesPrintComponent]
    });
    fixture = TestBed.createComponent(InvoicesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
