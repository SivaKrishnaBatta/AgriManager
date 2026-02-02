import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FieldService } from 'src/app/services/field/field.service';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {

  farms: any[] = [];

  constructor(
    private router: Router,
    private fieldService: FieldService
  ) {}

  ngOnInit(): void {
    this.loadFields();
  }

  loadFields(): void {
    this.fieldService.getFields().subscribe(res => {
      this.groupByFarm(res);
    });
  }

  groupByFarm(fields: any[]): void {
    const grouped: any = {};

    fields.forEach(field => {
      if (!grouped[field.farmId]) {
        grouped[field.farmId] = {
          farmId: field.farmId,
          farmName: field.farmName,
          fields: []
        };
      }

      grouped[field.farmId].fields.push(field);
    });

    this.farms = Object.values(grouped);
  }

  addField(): void {
    this.router.navigate(['/agri/fields/add']);
  }

  viewField(id: number): void {
    this.router.navigate(['/agri/fields/view', id]);
  }

  editField(id: number): void {
    this.router.navigate(['/agri/fields/edit', id]);
  }

  deleteField(id: number): void {
    if (confirm('Are you sure you want to delete this field?')) {
      this.fieldService.deleteField(id).subscribe(() => {
        this.loadFields();
      });
    }
  }
}
