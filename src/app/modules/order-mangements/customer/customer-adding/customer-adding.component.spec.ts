import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddingComponent } from './customer-adding.component';

describe('CustomerAddingComponent', () => {
  let component: CustomerAddingComponent;
  let fixture: ComponentFixture<CustomerAddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerAddingComponent]
    });
    fixture = TestBed.createComponent(CustomerAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
