import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMainsComponent } from './customer-mains.component';

describe('CustomerMainsComponent', () => {
  let component: CustomerMainsComponent;
  let fixture: ComponentFixture<CustomerMainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerMainsComponent]
    });
    fixture = TestBed.createComponent(CustomerMainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
