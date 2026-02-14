import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { Expense } from 'src/app/models/expense.model';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss']
})
export class ExpenseDetailsComponent implements OnInit {

  expense!: Expense;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.loading = true;

      this.expenseService.getById(id).subscribe({
        next: (res: any) => {
          this.expense = res.data || res;
          this.loading = false;
        },
        error: (err) => {
          console.error('Failed to load expense', err);
          this.loading = false;
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/agri/expenses/list']);
  }
}
