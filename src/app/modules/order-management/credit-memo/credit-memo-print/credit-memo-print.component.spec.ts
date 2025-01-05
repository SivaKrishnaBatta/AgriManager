import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMemoPrintComponent } from './credit-memo-print.component';

describe('CreditMemoPrintComponent', () => {
  let component: CreditMemoPrintComponent;
  let fixture: ComponentFixture<CreditMemoPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditMemoPrintComponent]
    });
    fixture = TestBed.createComponent(CreditMemoPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
