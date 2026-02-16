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

  showDeletePopup: boolean = false;
  selectedExpenseId: number | null = null;

  constructor(
    private router: Router,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.loading = true;

    this.expenseService.getAll().subscribe({
      next: (res: any) => {
        this.expenses = res.data || res;

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

  addExpense(): void {
    this.router.navigate(['/agri/expenses/add']);
  }

  viewExpense(exp: Expense): void {
    this.router.navigate(['/agri/expenses/view', exp.expenseId]);
  }

  editExpense(exp: Expense): void {
    this.router.navigate(['/agri/expenses/edit', exp.expenseId]);
  }

  openDeletePopup(id: number): void {
    this.selectedExpenseId = id;
    this.showDeletePopup = true;
  }

  closeDeletePopup(): void {
    this.selectedExpenseId = null;
    this.showDeletePopup = false;
  }

  confirmDelete(): void {
    if (!this.selectedExpenseId) return;

    this.expenseService.deleteExpense(this.selectedExpenseId).subscribe({
      next: () => {
        this.expenses = this.expenses.filter(
          e => e.expenseId !== this.selectedExpenseId
        );
        this.closeDeletePopup();
      },
      error: (err) => {
        console.error('Delete failed', err);
        this.closeDeletePopup();
      }
    });
  }
}
