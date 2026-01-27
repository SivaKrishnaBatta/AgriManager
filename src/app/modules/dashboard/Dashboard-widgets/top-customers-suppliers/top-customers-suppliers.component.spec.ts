import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCustomersSuppliersComponent } from './top-customers-suppliers.component';

describe('TopCustomersSuppliersComponent', () => {
  let component: TopCustomersSuppliersComponent;
  let fixture: ComponentFixture<TopCustomersSuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCustomersSuppliersComponent]
    });
    fixture = TestBed.createComponent(TopCustomersSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
