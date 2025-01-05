import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSoComponent } from './customer-so.component';

describe('CustomerSoComponent', () => {
  let component: CustomerSoComponent;
  let fixture: ComponentFixture<CustomerSoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSoComponent]
    });
    fixture = TestBed.createComponent(CustomerSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
