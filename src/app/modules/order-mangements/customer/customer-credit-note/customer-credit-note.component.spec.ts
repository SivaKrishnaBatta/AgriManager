import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreditNoteComponent } from './customer-credit-note.component';

describe('CustomerCreditNoteComponent', () => {
  let component: CustomerCreditNoteComponent;
  let fixture: ComponentFixture<CustomerCreditNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCreditNoteComponent]
    });
    fixture = TestBed.createComponent(CustomerCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
