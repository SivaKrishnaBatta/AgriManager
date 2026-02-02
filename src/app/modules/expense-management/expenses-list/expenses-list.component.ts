import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent {
  constructor(private router: Router) {}

  expenses = [
    {
      id: 1,
      date: '05 Jan 2026',
      crop: 'Rice',
      category: 'Fertilizer',
      amount: 2500,
      notes: 'Urea purchase'
    },
    {
      id: 2,
      date: '12 Jan 2026',
      crop: 'Wheat',
      category: 'Labor',
      amount: 1800,
      notes: 'Field workers'
    }
  ];

  addExpense() {
    this.router.navigate(['/agri/expenses/add']);
  }

  viewExpense(id: number) {
    this.router.navigate(['/agri/expenses/view', id]);
  }

  editExpense(id: number) {
    this.router.navigate(['/agri/expenses/edit', id]);
  }

}
