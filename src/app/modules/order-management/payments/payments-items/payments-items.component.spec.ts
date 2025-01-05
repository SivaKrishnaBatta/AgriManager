import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsItemsComponent } from './payments-items.component';

describe('PaymentsItemsComponent', () => {
  let component: PaymentsItemsComponent;
  let fixture: ComponentFixture<PaymentsItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsItemsComponent]
    });
    fixture = TestBed.createComponent(PaymentsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
