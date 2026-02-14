import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { ExpenseService } from 'src/app/services/expense/expense.service';
import { CropService } from 'src/app/services/crop/crop.service';
import { ExpenseCategoryService } from 'src/app/services/expanse-categorie/expanse-categorie.service';

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

  loading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService,
    private cropService: CropService,
    private expenseCategoryService: ExpenseCategoryService
  ) {}

  ngOnInit(): void {

    // Form initialization
    this.expenseForm = this.fb.group({
      cropId: ['', Validators.required],
      categoryId: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      expenseDate: ['', Validators.required],
      notes: ['']
    });

    // Load dropdowns
    this.loadDropdowns();

    // Check edit mode
    this.expenseId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.expenseId) {
      this.isEdit = true;
      this.loadExpense(this.expenseId);
    }
  }

  // ---------------- Load Dropdown Data ----------------

  loadDropdowns() {
    this.loading = true;

    forkJoin({
      crops: this.cropService.getCrops(),
      categories: this.expenseCategoryService.getAll()
    }).subscribe({
      next: (res:any) => {
        this.crops = res.crops.data;
        this.categories = res.categories.data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Dropdown load failed', err);
        this.loading = false;
      }
    });
  }

  // ---------------- Load Expense For Edit ----------------

  loadExpense(id: number) {

    this.expenseService.getById(id).subscribe({
      next: (res: any) => {
        this.expenseForm.patchValue({
          cropId: res.cropId.data,
          categoryId: res.categoryId.data,
          amount: res.amount.data,
          expenseDate: res.expenseDate
            ? res.expenseDate.substring(0, 10)
            : '',
          notes: res.notes || ''
        });
      },
      error: (err) => {
        console.error('Expense load failed', err);
      }
    });
  }

  // ---------------- Save ----------------

  save() {

    if (this.expenseForm.invalid) {
      this.expenseForm.markAllAsTouched();
      return;
    }

    const payload = {
      cropId: Number(this.expenseForm.value.cropId),
      categoryId: Number(this.expenseForm.value.categoryId),
      amount: Number(this.expenseForm.value.amount),
      expenseDate: this.expenseForm.value.expenseDate,
      notes: this.expenseForm.value.notes
    };

    this.loading = true;

    if (this.isEdit) {

      this.expenseService.update(this.expenseId, payload)
        .subscribe({
          next: () => {
            this.router.navigate(['/agri/expenses/list']);
          },
          error: (err) => {
            console.error('Update failed', err);
            this.loading = false;
          }
        });

    } else {

      this.expenseService.create(payload)
        .subscribe({
          next: () => {
            this.router.navigate(['/agri/expenses/list']);
          },
          error: (err) => {
            console.error('Create failed', err);
            this.loading = false;
          }
        });
    }
  }

  // ---------------- Cancel ----------------

  cancel() {
    this.router.navigate(['/agri/expenses/list']);
  }
}
