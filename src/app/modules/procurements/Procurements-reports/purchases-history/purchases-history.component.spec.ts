import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesHistoryComponent } from './purchases-history.component';

describe('PurchasesHistoryComponent', () => {
  let component: PurchasesHistoryComponent;
  let fixture: ComponentFixture<PurchasesHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasesHistoryComponent]
    });
    fixture = TestBed.createComponent(PurchasesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
