import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { Expense } from 'src/app/models/expense.model';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  expenses: Expense[] = [];
  loading = false;

  constructor(
    private router: Router,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses() {
    this.loading = true;

    this.expenseService.getAll().subscribe({
      next: (res: any) => {
        this.expenses = res.data || res;

        // Sort by latest date (frontend only)
        this.expenses.sort((a, b) =>
          new Date(b.expenseDate).getTime() -
          new Date(a.expenseDate).getTime()
        );

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  addExpense() {
    this.router.navigate(['/agri/expenses/add']);
  }

  viewExpense(exp: Expense) {
    this.router.navigate(['/agri/expenses/view', exp.expenseId]);
  }

  editExpense(exp: Expense) {
    this.router.navigate(['/agri/expenses/edit', exp.expenseId]);
  }

  // ✅ Pure frontend delete (no id usage)
  deleteExpense(index: number) {

    const confirmDelete = confirm('Are you sure you want to delete this expense?');
    if (!confirmDelete) return;

    // Remove from frontend only
    this.expenses.splice(index, 1);
  }
}
