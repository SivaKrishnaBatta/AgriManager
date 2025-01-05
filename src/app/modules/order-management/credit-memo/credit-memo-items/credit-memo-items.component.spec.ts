import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMemoItemsComponent } from './credit-memo-items.component';

describe('CreditMemoItemsComponent', () => {
  let component: CreditMemoItemsComponent;
  let fixture: ComponentFixture<CreditMemoItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditMemoItemsComponent]
    });
    fixture = TestBed.createComponent(CreditMemoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
