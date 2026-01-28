import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-field-farms',
  templateUrl: './field-farms.component.html',
  styleUrls: ['./field-farms.component.scss']
})
export class FieldFarmsComponent implements OnInit {
  fieldForm!: FormGroup;
  isEdit = false;
  fieldId!: number;

  // Static farms (for dropdown)
  farms = [
    { id: 1, name: 'Farm 1' },
    { id: 2, name: 'Farm 2' }
  ];

  // Static fields data (used only for edit)
  fields = [
    {
      id: 1,
      farmId: 1,
      name: 'Field A',
      area: '2 Acres',
      notes: 'Near water source'
    },
    {
      id: 2,
      farmId: 2,
      name: 'Field B',
      area: '1.5 Acres',
      notes: 'Seasonal field'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fieldForm = this.fb.group({
      farmId: ['', Validators.required],
      name: ['', Validators.required],
      area: [''],
      notes: ['']
    });

    this.fieldId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.fieldId) {
      this.isEdit = true;
      this.loadField(this.fieldId);
    }
  }

  loadField(id: number) {
    const field = this.fields.find(f => f.id === id);
    if (field) {
      this.fieldForm.patchValue({
        farmId: field.farmId,
        name: field.name,
        area: field.area,
        notes: field.notes
      });
    }
  }

  save() {
    if (this.fieldForm.invalid) return;

    if (this.isEdit) {
      console.log('Update Field', this.fieldForm.value);
    } else {
      console.log('Create Field', this.fieldForm.value);
    }

    this.router.navigate(['/scm/fields/list']);
  }

  cancel() {
    this.router.navigate(['/scm/fields/list']);
  }

}
