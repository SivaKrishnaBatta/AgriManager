import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeliverysComponent } from './customer-deliverys.component';

describe('CustomerDeliverysComponent', () => {
  let component: CustomerDeliverysComponent;
  let fixture: ComponentFixture<CustomerDeliverysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDeliverysComponent]
    });
    fixture = TestBed.createComponent(CustomerDeliverysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
