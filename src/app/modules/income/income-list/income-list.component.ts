import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent {
  constructor(private router: Router) {}
   incomes = [
    {
      id: 1,
      date: '10 Jan 2026',
      crop: 'Rice',
      quantity: 1200,
      amount: 36000,
      notes: 'Local market sale'
    },
    {
      id: 2,
      date: '18 Jan 2026',
      crop: 'Wheat',
      quantity: 800,
      amount: 24000,
      notes: 'Wholesale buyer'
    }
  ];

  addIncome() {
    this.router.navigate(['/agri/income/add']);
  }

  viewIncome(id: number) {
    this.router.navigate(['/agri/income/view', id]);
  }

  editIncome(id: number) {
    this.router.navigate(['/agri/income/edit', id]);
  }
}
