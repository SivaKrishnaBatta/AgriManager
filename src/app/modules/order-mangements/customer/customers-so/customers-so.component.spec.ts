import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSoComponent } from './customers-so.component';

describe('CustomersSoComponent', () => {
  let component: CustomersSoComponent;
  let fixture: ComponentFixture<CustomersSoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersSoComponent]
    });
    fixture = TestBed.createComponent(CustomersSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
