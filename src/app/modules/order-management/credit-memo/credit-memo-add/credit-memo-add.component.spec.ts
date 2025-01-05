import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMemoAddComponent } from './credit-memo-add.component';

describe('CreditMemoAddComponent', () => {
  let component: CreditMemoAddComponent;
  let fixture: ComponentFixture<CreditMemoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditMemoAddComponent]
    });
    fixture = TestBed.createComponent(CreditMemoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
