// import { Component, OnInit } from '@angular/core';
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

  // ✅ Popup state
  showDeletePopup: boolean = false;
  selectedFieldId: number | null = null;

  constructor(
    private router: Router,
    private fieldService: FieldService
  ) {}

  ngOnInit(): void {
    this.loadFields();
  }

  loadFields(): void {
    this.fieldService.getFields().subscribe((res:any) => {
      this.groupByFarm(res.data);
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

  // ✅ Open popup
  openDeletePopup(id: number): void {
    this.selectedFieldId = id;
    this.showDeletePopup = true;
  }

  // ❌ Close popup
  closeDeletePopup(): void {
    this.showDeletePopup = false;
    this.selectedFieldId = null;
  }

  // ✅ Confirm delete
  confirmDelete(): void {
    if (this.selectedFieldId != null) {
      this.fieldService.deleteField(this.selectedFieldId).subscribe({
        next: () => {
          this.closeDeletePopup();
          this.loadFields();
        },
        error: () => {
          alert('Failed to delete field');
          this.closeDeletePopup();
        }
      });
    }
  }
}
