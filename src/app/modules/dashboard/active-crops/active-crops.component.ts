import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-crops',
  templateUrl: './active-crops.component.html',
  styleUrls: ['./active-crops.component.scss']
})
export class ActiveCropsComponent {
    showModal = false;
  selectedCrop: any = null;
  activeCrops = [
    {
      id: 1,
      crop: 'Rice',
      farm: 'Green Farm',
      field: 'Field A',
      startDate: '2025-01-10',
      status: 'Active'
    },
    {
      id: 2,
      crop: 'Wheat',
      farm: 'Sunrise Farm',
      field: 'Field B',
      startDate: '2025-01-15',
      status: 'Active'
    },
    {
      id: 3,
      crop: 'Maize',
      farm: 'River Farm',
      field: 'Field C',
      startDate: '2025-01-20',
      status: 'Active'
    }
  ];
  constructor(private router: Router) {}

  // ✔ Row click OR Add Crop
  openForm(crop: any) {
    this.selectedCrop = crop;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedCrop = null;
  }

  // ✔ Crop name click
  goToDetails(id: number, event: Event) {
    event.stopPropagation(); // IMPORTANT
    this.router.navigate(['/crops/details', id]);
  }
}
