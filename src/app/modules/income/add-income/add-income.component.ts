import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit{
  incomeForm!: FormGroup;
  isEdit = false;
  incomeId!: number;

  crops = ['Rice', 'Wheat', 'Maize'];

  incomes = [
    {
      id: 1,
      crop: 'Rice',
      quantity: 1200,
      amount: 36000,
      date: '2026-01-10',
      notes: 'Local market sale'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      crop: ['', Validators.required],
      quantity: [''],
      price: [''],
      amount: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['']
    });

    this.incomeId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.incomeId) {
      this.isEdit = true;
      this.loadIncome(this.incomeId);
    }
  }

  loadIncome(id: number) {
    const income = this.incomes.find(i => i.id === id);
    if (income) {
      this.incomeForm.patchValue(income);
    }
  }

  save() {
    if (this.incomeForm.invalid) return;

    console.log(this.isEdit ? 'Update Income' : 'Create Income', this.incomeForm.value);
    this.router.navigate(['/agri/income/list']);
  }

  cancel() {
    this.router.navigate(['/agri/income/list']);
  }
}
