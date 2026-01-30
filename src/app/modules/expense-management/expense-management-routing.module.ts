import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { CropwiseExpensesComponent } from './cropwise-expenses/cropwise-expenses.component';
import { ExpenseCategoriesComponent } from './expense-categories/expense-categories.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
{path:'add', component:AddExpenseComponent},
{path:'cropwise', component:CropwiseExpensesComponent},
{path:'category', component:ExpenseCategoriesComponent},
{path:'expenselist', component:ExpensesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseManagementRoutingModule { }
