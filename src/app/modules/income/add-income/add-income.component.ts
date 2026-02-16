import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeService } from 'src/app/services/income/income.service';
import { CropService } from 'src/app/services/crop/crop.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  incomeForm!: FormGroup;
  isEdit = false;
  incomeId!: number;
  crops: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private incomeService: IncomeService,
    private cropService: CropService
  ) {}

  ngOnInit(): void {

  this.incomeForm = this.fb.group({
    cropId: [null, Validators.required],
    quantity: [null, Validators.required],
    pricePerUnit: [null, Validators.required],
    totalAmount: [{ value: 0, disabled: true }],
    saleDate: [null, Validators.required],
    notes: ['']
  });

  this.incomeId = Number(this.route.snapshot.paramMap.get('id'));

  // First load crops
  this.cropService.getCrops().subscribe((res: any) => {
    this.crops = res.data || [];

    // After crops loaded → load income
    if (this.incomeId) {
      this.isEdit = true;
      this.loadIncome(this.incomeId);
    }
  });

  this.incomeForm.get('quantity')?.valueChanges.subscribe(() => this.calculateTotal());
  this.incomeForm.get('pricePerUnit')?.valueChanges.subscribe(() => this.calculateTotal());



    this.incomeId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.incomeId) {
      this.isEdit = true;
      this.loadIncome(this.incomeId);
    }
  }

  loadCrops() {
    this.cropService.getCrops().subscribe((res: any) => {
      this.crops = Array.isArray(res.data) ? res.data : [];
    });
  }

  loadIncome(id: number) {
    this.incomeService.getIncomeById(id).subscribe((res: any) => {
      const data = res.data || res;

      // Convert date to yyyy-MM-dd for input type="date"
      const formattedDate = data.saleDate
        ? new Date(data.saleDate).toISOString().split('T')[0]
        : null;

      this.incomeForm.patchValue({
        cropId: Number(data.cropId),
        quantity: data.quantity,
        pricePerUnit: data.pricePerUnit,
        totalAmount: data.totalAmount,
        saleDate: formattedDate,
        notes: data.notes
      });
    });
  }

  calculateTotal() {
    const qty = Number(this.incomeForm.get('quantity')?.value || 0);
    const price = Number(this.incomeForm.get('pricePerUnit')?.value || 0);
    const total = +(qty * price).toFixed(2); // financial rounding
    this.incomeForm.get('totalAmount')?.setValue(total);
  }

  save() {
    if (this.incomeForm.invalid) {
      this.incomeForm.markAllAsTouched();
      return;
    }

    const raw = this.incomeForm.getRawValue();

    const payload = {
      cropId: raw.cropId,
      quantity: Number(raw.quantity),
      pricePerUnit: Number(raw.pricePerUnit),
      totalAmount: Number(raw.totalAmount),
      saleDate: raw.saleDate, // already yyyy-MM-dd
      notes: raw.notes || ''
    };

    const action = this.isEdit
      ? this.incomeService.updateIncome(this.incomeId, payload)
      : this.incomeService.createIncome(payload);

    action.subscribe({
      next: () => {
        this.router.navigate(['/agri/income/list']);
      },
      error: (err) => {
        alert(err.error?.message || 'Failed to save income');
      }
    });
  }

  cancel() {
    this.router.navigate(['/agri/income/list']);
  }
}
