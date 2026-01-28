import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent {
 constructor(private router: Router) {}

  farms = [
    {
      farmId: 1,
      farmName: 'Cotton Farm',
      fields: [
        { id: 1, name: 'Field A', area: '2 Acres' },
        { id: 2, name: 'Field B', area: '1.5 Acres' }
      ]
    },
    {
      farmId: 2,
      farmName: 'Tomato Farm',
      fields: [
        { id: 3, name: 'Field C', area: '3 Acres' }
      ]
    }
  ];

  addField() {
    this.router.navigate(['/scm/fields/add']);
  }

  viewField(id: number) {
    this.router.navigate(['/scm/fields/view', id]);
  }

  editField(id: number) {
    this.router.navigate(['/scm/fields/edit', id]);
  }

  deleteField(id: number) {
    if (confirm('Are you sure you want to delete this field?')) {
      console.log('Delete Field', id);
    }
  }

}
