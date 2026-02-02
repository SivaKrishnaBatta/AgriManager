import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  expenseForm!: FormGroup;
  isEdit = false;
  expenseId!: number;

  crops = ['Rice', 'Wheat', 'Maize'];
  categories = ['Fertilizer', 'Labor', 'Pesticide', 'Seeds'];

  expenses = [
    {
      id: 1,
      crop: 'Rice',
      category: 'Fertilizer',
      amount: 2500,
      date: '2026-01-05',
      notes: 'Urea'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      crop: ['', Validators.required],
      category: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['']
    });

    this.expenseId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.expenseId) {
      this.isEdit = true;
      this.loadExpense(this.expenseId);
    }
  }

  loadExpense(id: number) {
    const exp = this.expenses.find(e => e.id === id);
    if (exp) {
      this.expenseForm.patchValue(exp);
    }
  }

  save() {
    if (this.expenseForm.invalid) return;
    console.log(this.isEdit ? 'Update Expense' : 'Create Expense', this.expenseForm.value);
    this.router.navigate(['/agri/expenses/list']);
  }

  cancel() {
    this.router.navigate(['/agri/expenses/list']);
  }

}
