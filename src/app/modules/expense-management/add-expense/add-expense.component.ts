import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  expenseForm!: FormGroup;
  isEdit = false;
  expenseId!: number;

  crops: any[] = [];
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      cropId: ['', Validators.required],
      categoryId: ['', Validators.required],
      amount: ['', Validators.required],
      expenseDate: ['', Validators.required],
      notes: ['']
    });

    this.expenseId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.expenseId) {
      this.isEdit = true;
      this.loadExpense(this.expenseId);
    }

    // TODO: replace with Crop & Category API calls
    this.loadMockDropdowns();
  }

  loadExpense(id: number) {
    this.expenseService.getById(id).subscribe(res => {
      this.expenseForm.patchValue({
        cropId: res.cropId,
        categoryId: res.categoryId,
        amount: res.amount,
        expenseDate: res.expenseDate.substring(0, 10),
        notes: res.notes
      });
    });
  }

  save() {
    if (this.expenseForm.invalid) return;

    const payload = this.expenseForm.value;

    if (this.isEdit) {
      this.expenseService.update(this.expenseId, payload)
        .subscribe(() => {
          this.router.navigate(['/agri/expenses/list']);
        });
    } else {
      this.expenseService.create(payload)
        .subscribe(() => {
          this.router.navigate(['/agri/expenses/list']);
        });
    }
  }

  cancel() {
    this.router.navigate(['/agri/expenses/list']);
  }

  loadMockDropdowns() {
    this.crops = [
      { cropId: 1, cropName: 'Rice' },
      { cropId: 2, cropName: 'Wheat' }
    ];

    this.categories = [
      { categoryId: 1, categoryName: 'Fertilizer' },
      { categoryId: 2, categoryName: 'Labor' }
    ];
  }
}
