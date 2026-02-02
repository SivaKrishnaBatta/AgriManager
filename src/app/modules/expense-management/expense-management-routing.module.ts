import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { CropwiseExpensesComponent } from './cropwise-expenses/cropwise-expenses.component';
import { ExpenseCategoriesComponent } from './expense-categories/expense-categories.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseCategoryFormComponent } from './expense-category-form/expense-category-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path:'list', component:ExpensesListComponent},
  {path:'add', component:AddExpenseComponent},
  { path: 'edit/:id', component: AddExpenseComponent },
  { path: 'view/:id', component: ExpenseDetailsComponent },
  {path:'cropwise', component:CropwiseExpensesComponent},
  // Expense Categories
  {path:'category', component:ExpenseCategoriesComponent},
  { path: 'categories/add', component: ExpenseCategoryFormComponent },
  { path: 'categories/edit/:id', component: ExpenseCategoryFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseManagementRoutingModule { }
