import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpenseManagementRoutingModule } from './expense-management-routing.module';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { CropwiseExpensesComponent } from './cropwise-expenses/cropwise-expenses.component';
import { ExpenseCategoriesComponent } from './expense-categories/expense-categories.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseCategoryFormComponent } from './expense-category-form/expense-category-form.component';
@NgModule({
  declarations: [
   AddExpenseComponent,
   CropwiseExpensesComponent,
   ExpenseCategoriesComponent,
   ExpensesListComponent,
   ExpenseDetailsComponent,
   ExpenseCategoryFormComponent


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExpenseManagementRoutingModule
    
  ]
})
export class ExpenseManagementModule { }
