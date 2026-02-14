import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmService } from 'src/app/services/farm/farm.service';
import { FieldService } from 'src/app/services/field/field.service';

@Component({
  selector: 'app-field-farms',
  templateUrl: './field-farms.component.html',
  styleUrls: ['./field-farms.component.scss']
})
export class FieldFarmsComponent implements OnInit {

  fieldForm!: FormGroup;
  isEdit = false;
  fieldId!: number;

  farms: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private farmService: FarmService,
    private fieldService: FieldService
  ) {}

  ngOnInit(): void {
    this.fieldForm = this.fb.group({
      farmId: ['', Validators.required],
      fieldName: ['', Validators.required],
      area: [''],
      notes: ['']
    });

    this.loadFarms();

    this.fieldId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.fieldId) {
      this.isEdit = true;
      this.loadField(this.fieldId);
    }
  }

  // ✅ Load farms for dropdown
  loadFarms(): void {
    this.farmService.getFarms().subscribe((res:any) => {
      this.farms = res.data;
    });
  }

  // ✅ Load field for edit
  loadField(id: number): void {
    this.fieldService.getFieldById(id).subscribe((res: any) => {
      this.fieldForm.patchValue({
        farmId: res.data.farmId,
        fieldName: res.data.fieldName,
        area: res.data.area,
        notes: res.data.notes
      });
    });
  }

  // ✅ Save / Update
  save(): void {
    if (this.fieldForm.invalid) return;

    if (this.isEdit) {
      this.fieldService
        .updateField(this.fieldId, this.fieldForm.value)
        .subscribe(() => {
          this.router.navigate(['/agri/fields/list']);
        });
    } else {
      this.fieldService
        .createField(this.fieldForm.value)
        .subscribe(() => {
          this.router.navigate(['/agri/fields/list']);
        });
    }
  }

  cancel(): void {
    this.router.navigate(['/agri/fields/list']);
  }
}
