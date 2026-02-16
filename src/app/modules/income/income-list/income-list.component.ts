import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeService } from 'src/app/services/income/income.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent {


  incomes: any[] = [];

  // Popup state
  showDeletePopup: boolean = false;
  selectedIncomeId: number | null = null;

  constructor(
    private incomeService: IncomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadIncomes();
  }

  loadIncomes() {
    this.incomeService.getIncomes().subscribe((res: any) => {
      this.incomes = res.data || [];
      this.incomes.sort((a, b) => a.incomeId - b.incomeId);
    });
  }

  addIncome() {
    this.router.navigate(['/agri/income/add']);
  }

  editIncome(id: number) {
    this.router.navigate(['/agri/income/edit', id]);
  }

  viewIncome(id: number) {
    this.router.navigate(['/agri/income/view', id]);
  }

  // Open popup
  openDeletePopup(id: number): void {
    this.selectedIncomeId = id;
    this.showDeletePopup = true;
  }

  // Close popup
  closeDeletePopup(): void {
    this.showDeletePopup = false;
    this.selectedIncomeId = null;
  }

  // Confirm delete
  confirmDelete(): void {
    if (this.selectedIncomeId != null) {
      this.incomeService.deleteIncome(this.selectedIncomeId).subscribe({
        next: () => {
          this.closeDeletePopup();
          this.loadIncomes();
        },
        error: () => {
          alert('Failed to delete income');
          this.closeDeletePopup();
        }
      });
    }

  }
}
