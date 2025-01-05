import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMemoMainComponent } from './credit-memo-main.component';

describe('CreditMemoMainComponent', () => {
  let component: CreditMemoMainComponent;
  let fixture: ComponentFixture<CreditMemoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditMemoMainComponent]
    });
    fixture = TestBed.createComponent(CreditMemoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
