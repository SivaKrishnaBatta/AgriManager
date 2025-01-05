import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentTermsComponent } from './admin-payment-terms.component';

describe('AdminPaymentTermsComponent', () => {
  let component: AdminPaymentTermsComponent;
  let fixture: ComponentFixture<AdminPaymentTermsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPaymentTermsComponent]
    });
    fixture = TestBed.createComponent(AdminPaymentTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
