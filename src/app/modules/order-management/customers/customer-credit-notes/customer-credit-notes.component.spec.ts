import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreditNotesComponent } from './customer-credit-notes.component';

describe('CustomerCreditNotesComponent', () => {
  let component: CustomerCreditNotesComponent;
  let fixture: ComponentFixture<CustomerCreditNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCreditNotesComponent]
    });
    fixture = TestBed.createComponent(CustomerCreditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
