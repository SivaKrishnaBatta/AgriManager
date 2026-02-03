import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CropService } from 'src/app/services/crop/crop.service';

@Component({
  selector: 'app-add-crop',
  templateUrl: './add-crop.component.html',
  styleUrls: ['./add-crop.component.scss']
})
export class AddCropComponent implements OnInit {

  cropForm!: FormGroup;
  isEdit = false;
  cropId!: number;

  farms: any[] = [];
  fields: any[] = [];
  statuses: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cropService: CropService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadDropdowns();

    this.cropId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.cropId) {
      this.isEdit = true;
      this.loadCropById(this.cropId);
    }

    // 🔁 Clear End Date if status is not Completed
    this.cropForm.get('cropStatusId')?.valueChanges.subscribe(statusId => {
      const completed = this.statuses.find(s => s.cropStatusName === 'Completed');
      if (!completed || statusId !== completed.cropStatusId) {
        this.cropForm.patchValue({ expectedEndDate: null });
      }
    });
  }

  buildForm() {
    this.cropForm = this.fb.group({
      cropName: ['', Validators.required],
      farmId: ['', Validators.required],
      fieldId: ['', Validators.required],
      cropStatusId: ['', Validators.required],
      season: [''],
      startDate: ['', Validators.required],
      expectedEndDate: [''],
      expectedYield: ['']
    }, { validators: this.dateRangeValidator });
  }

  // ✅ Custom validator: EndDate >= StartDate
  dateRangeValidator(control: AbstractControl): ValidationErrors | null {
    const start = control.get('startDate')?.value;
    const end = control.get('expectedEndDate')?.value;

    if (start && end && new Date(end) < new Date(start)) {
      return { dateRangeInvalid: true };
    }
    return null;
  }

loadDropdowns() {
  this.cropService.getFarms().subscribe(res => this.farms = res);
  this.cropService.getFields().subscribe(res => this.fields = res);

  this.cropService.getCropStatuses().subscribe(res => {
  this.statuses = res;

  this.cropForm.get('cropStatusId')?.valueChanges.subscribe(value => {
    const statusId = Number(value);

    const completed = this.statuses.find(
      s => s.cropStatusName.toLowerCase() === 'completed'
    );

    if (!completed || statusId !== completed.cropStatusId) {
      this.cropForm.patchValue({ expectedEndDate: null });
    }
  });
});

}


  loadCropById(id: number) {
    this.cropService.getCropById(id).subscribe(res => {
      this.cropForm.patchValue(res);
    });
  }

  // 👁 Show End Date only if status = Completed
    get showEndDate(): boolean {
  if (!this.statuses || this.statuses.length === 0) {
    return false;
  }

  const statusId = Number(this.cropForm.get('cropStatusId')?.value);

  const completedStatus = this.statuses.find(
    s => s.cropStatusName.toLowerCase() === 'completed'
  );

  return !!completedStatus && statusId === completedStatus.cropStatusId;
}


  save() {
    if (this.cropForm.invalid) {
      this.cropForm.markAllAsTouched();
      return;
    }

    const action = this.isEdit
      ? this.cropService.updateCrop(this.cropId, this.cropForm.value)
      : this.cropService.createCrop(this.cropForm.value);

    action.subscribe(() => {
      this.router.navigate(['/agri/crops/list']);
    });
  }

  cancel() {
    this.router.navigate(['/agri/crops/list']);
  }

  // 🔴 Helper for HTML
  isInvalid(controlName: string): boolean {
    const control = this.cropForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }
}
