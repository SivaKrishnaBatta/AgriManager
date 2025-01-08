import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentsTermsComponent } from './admin-payments-terms.component';

describe('AdminPaymentsTermsComponent', () => {
  let component: AdminPaymentsTermsComponent;
  let fixture: ComponentFixture<AdminPaymentsTermsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPaymentsTermsComponent]
    });
    fixture = TestBed.createComponent(AdminPaymentsTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
