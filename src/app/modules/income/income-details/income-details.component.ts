import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeService } from 'src/app/services/income/income.service';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.scss']
})
export class IncomeDetailsComponent implements OnInit {

  income: any = null;
  incomeId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incomeService: IncomeService
  ) {}

  ngOnInit(): void {
    this.incomeId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.incomeId) {
      this.loadIncome(this.incomeId);
    }
  }

  loadIncome(id: number) {
    this.incomeService.getIncomeById(id).subscribe({
      next: (res: any) => {
        console.log('Income details response:', res);
        this.income = res.data;   // ✅ IMPORTANT
      },
      error: (err) => {
        console.error('Failed to load income', err);
        alert('Failed to load income details');
      }
    });
  }

  goBack() {
    this.router.navigate(['/agri/income/list']);
  }
}
