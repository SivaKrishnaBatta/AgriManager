import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMainComponent } from './payment-main.component';

describe('PaymentMainComponent', () => {
  let component: PaymentMainComponent;
  let fixture: ComponentFixture<PaymentMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentMainComponent]
    });
    fixture = TestBed.createComponent(PaymentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
