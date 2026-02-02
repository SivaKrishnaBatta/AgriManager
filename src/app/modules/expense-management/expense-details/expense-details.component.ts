import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss']
})
export class ExpenseDetailsComponent implements OnInit {
  expense: any;

  expenses = [
    {
      id: 1,
      crop: 'Rice',
      category: 'Fertilizer',
      amount: 2500,
      date: '05 Jan 2026',
      notes: 'Urea'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.expense = this.expenses.find(e => e.id === id);
  }

  goBack() {
    this.router.navigate(['/agri/expenses/list']);
  }

}
