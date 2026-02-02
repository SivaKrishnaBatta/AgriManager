import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.scss']
})
export class IncomeDetailsComponent implements OnInit {
  income: any;

  incomes = [
    {
      id: 1,
      crop: 'Rice',
      quantity: 1200,
      amount: 36000,
      date: '10 Jan 2026',
      notes: 'Local market sale'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.income = this.incomes.find(i => i.id === id);
  }

  goBack() {
    this.router.navigate(['/agri/income/list']);
  }
}
