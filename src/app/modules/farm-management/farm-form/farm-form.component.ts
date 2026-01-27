import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.scss']
})
export class FarmFormComponent {
  farmForm!: FormGroup;
  isEdit = false;
  farmId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.farmForm = this.fb.group({
      name: ['', Validators.required],
      location: [''],
      notes: ['']
    });

    this.farmId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.farmId) {
      this.isEdit = true;
      this.loadFarm(this.farmId);
    }
  }

  loadFarm(id: number) {
    // mock data – replace with API
    this.farmForm.patchValue({
      name: 'Farm 1',
      location: 'Hyderabad',
      notes: 'Test farm'
    });
  }

  save() {
    if (this.farmForm.invalid) return;

    if (this.isEdit) {
      console.log('Update farm', this.farmForm.value);
    } else {
      console.log('Create farm', this.farmForm.value);
    }

    this.router.navigate(['/scm/farms/list']);
  }

  cancel() {
    this.router.navigate(['/scm/farms/list']);
  }

}
