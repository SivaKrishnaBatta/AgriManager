import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCategorySetupComponent } from './expense-category-setup.component';

describe('ExpenseCategorySetupComponent', () => {
  let component: ExpenseCategorySetupComponent;
  let fixture: ComponentFixture<ExpenseCategorySetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseCategorySetupComponent]
    });
    fixture = TestBed.createComponent(ExpenseCategorySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
