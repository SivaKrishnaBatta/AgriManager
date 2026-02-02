import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.scss']
})
export class CropListComponent {
cropsList = [
  {
    id: 1,
    cropName: 'Rice',
    farmName: 'Green Farm',
    fieldName: 'Field A',
    status: 'Active',
    startDate: '01 Jan 2026',
    endDate: null
  },
  {
    id: 2,
    cropName: 'Wheat',
    farmName: 'Green Farm',
    fieldName: 'Field B',
    status: 'Completed',
    startDate: '15 Oct 2025',
    endDate: '10 Jan 2026'
  },
  {
    id: 3,
    cropName: 'Maize',
    farmName: 'Sunrise Farm',
    fieldName: 'Field C',
    status: 'Active',
    startDate: '20 Dec 2025',
    endDate: null
  }
];


      constructor(private router: Router) {}
    addCrop() {
    this.router.navigate(['/agri/crops/add']);
  }
    editCrop(id: number) {
    this.router.navigate(['/agri/crops/edit', id]);
  }
}
