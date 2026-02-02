import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCategoryFormComponent } from './expense-category-form.component';

describe('ExpenseCategoryFormComponent', () => {
  let component: ExpenseCategoryFormComponent;
  let fixture: ComponentFixture<ExpenseCategoryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseCategoryFormComponent]
    });
    fixture = TestBed.createComponent(ExpenseCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
