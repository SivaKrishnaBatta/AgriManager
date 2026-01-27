import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalExpensesComponent } from './total-expenses.component';

describe('TotalExpensesComponent', () => {
  let component: TotalExpensesComponent;
  let fixture: ComponentFixture<TotalExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalExpensesComponent]
    });
    fixture = TestBed.createComponent(TotalExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
