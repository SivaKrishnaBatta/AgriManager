import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-crop',
  templateUrl: './add-crop.component.html',
  styleUrls: ['./add-crop.component.scss']
})
export class AddCropComponent implements OnInit {
cropForm!: FormGroup;
  isEdit = false;
  cropId!: number;

  farms = ['Green Farm', 'Sunrise Farm'];
  fields = ['Field A', 'Field B', 'Field C'];

  crops = [
    {
      id: 1,
      cropName: 'Rice',
      farmName: 'Green Farm',
      fieldName: 'Field A',
      status: 'Active',
      startDate: '2026-01-01',
      endDate: '',
      notes: 'Kharif crop'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cropForm = this.fb.group({
      cropName: ['', Validators.required],
      farmName: ['', Validators.required],
      fieldName: ['', Validators.required],
      status: ['Active', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      notes: ['']
    });

    this.cropId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.cropId) {
      this.isEdit = true;
      this.loadCrop(this.cropId);
    }
  }

  loadCrop(id: number) {
    const crop = this.crops.find(c => c.id === id);
    if (crop) {
      this.cropForm.patchValue(crop);
    }
  }

  save() {
    if (this.cropForm.invalid) return;

    console.log(this.isEdit ? 'Update Crop' : 'Create Crop', this.cropForm.value);
    this.router.navigate(['/agri/crops/list']);
  }

  cancel() {
    this.router.navigate(['/agri/crops/list']);
  }

}
