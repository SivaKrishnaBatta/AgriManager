import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewsComponent } from './customer-views.component';

describe('CustomerViewsComponent', () => {
  let component: CustomerViewsComponent;
  let fixture: ComponentFixture<CustomerViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerViewsComponent]
    });
    fixture = TestBed.createComponent(CustomerViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
