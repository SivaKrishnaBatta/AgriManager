import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsPrintComponent } from './payments-print.component';

describe('PaymentsPrintComponent', () => {
  let component: PaymentsPrintComponent;
  let fixture: ComponentFixture<PaymentsPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsPrintComponent]
    });
    fixture = TestBed.createComponent(PaymentsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
