import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPackagesComponent } from './customer-packages.component';

describe('CustomerPackagesComponent', () => {
  let component: CustomerPackagesComponent;
  let fixture: ComponentFixture<CustomerPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPackagesComponent]
    });
    fixture = TestBed.createComponent(CustomerPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
