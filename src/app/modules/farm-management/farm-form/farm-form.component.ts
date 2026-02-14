import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FarmService } from 'src/app/services/farm/farm.service';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.scss']
})
export class FarmFormComponent implements OnInit{
   farmForm!: FormGroup;
  farmId: number | null = null;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private farmService: FarmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.farmForm = this.fb.group({
      farmName: ['', Validators.required],
      location: [''],
      totalFields: [''],
      notes: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.farmId = Number(id);
      this.isEdit = true;
      this.loadFarm();
    }
  }

  // ✅ THIS METHOD WAS MISSING
  submit(): void {
    if (this.farmForm.invalid) return;

    if (this.isEdit && this.farmId) {
      this.farmService
        .updateFarm(this.farmId, this.farmForm.value)
        .subscribe(() => {
          this.router.navigate(['/agri/farms/list']);
        });
    } else {
      this.farmService
        .addFarm(this.farmForm.value)
        .subscribe(() => {
          this.router.navigate(['/agri/farms/list']);
        });
    }
  }

  loadFarm(): void {
    if (!this.farmId) return;

    this.farmService.getFarmById(this.farmId).subscribe((res:any) => {
      this.farmForm.patchValue(res.data);
    });
  }

  cancel(): void {
    this.router.navigate(['/agri/farms/list']);
  }

}
