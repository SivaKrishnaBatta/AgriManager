import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-field-deatils',
  templateUrl: './field-deatils.component.html',
  styleUrls: ['./field-deatils.component.scss']
})
export class FieldDeatilsComponent implements OnInit {

  fieldId!: number;
  field: any;

  // Static data (same as list)
  farms = [
    {
      farmId: 1,
      farmName: 'Cotton Farm',
      fields: [
        {
          id: 1,
          name: 'Field A',
          area: '2 Acres',
          notes: 'Near water source'
        },
        {
          id: 2,
          name: 'Field B',
          area: '1.5 Acres',
          notes: 'Good soil quality'
        }
      ]
    },
    {
      farmId: 2,
      farmName: 'Tomato Farm',
      fields: [
        {
          id: 3,
          name: 'Field C',
          area: '3 Acres',
          notes: 'Used for seasonal crops'
        }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fieldId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFieldDetails();
  }

  loadFieldDetails() {
    for (const farm of this.farms) {
      const foundField = farm.fields.find(f => f.id === this.fieldId);
      if (foundField) {
        this.field = {
          ...foundField,
          farmName: farm.farmName
        };
        break;
      }
    }

    if (!this.field) {
      this.router.navigate(['/scm/fields/list']);
    }
  }

  goBack() {
    this.router.navigate(['/scm/fields/list']);
  }

  editField() {
    this.router.navigate(['/scm/fields/edit', this.fieldId]);
  }
}
