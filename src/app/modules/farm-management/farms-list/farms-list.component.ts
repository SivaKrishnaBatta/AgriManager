import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmService } from 'src/app/services/farm/farm.service';

@Component({
  selector: 'app-farms-list',
  templateUrl: './farms-list.component.html',
  styleUrls: ['./farms-list.component.scss']
})
export class FarmsListComponent implements OnInit {

  farms: any[] = [];

  showDeletePopup: boolean = false;
  selectedFarmId: number | null = null;

  constructor(
    private farmService: FarmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFarms();
  }

  loadFarms(): void {
    this.farmService.getFarms().subscribe({
      next: (res: any) => {
        this.farms = res.data || [];
        this.farms.sort((a, b) => a.farmId - b.farmId);
      },
      error: (err) => {
        console.error('Failed to load farms', err);
      }
    });
  }

  addFarm(): void {
    this.router.navigate(['/agri/farms/add']);
  }

  editFarm(id: number): void {
    this.router.navigate(['/agri/farms/edit', id]);
  }

  viewFarm(id: number): void {
    this.router.navigate(['/agri/farms/view', id]);
  }

  openDeletePopup(id: number): void {
    this.selectedFarmId = id;
    this.showDeletePopup = true;
  }

  closeDeletePopup(): void {
    this.showDeletePopup = false;
    this.selectedFarmId = null;
  }

  confirmDelete(): void {
    if (!this.selectedFarmId) return;

    this.farmService.deleteFarm(this.selectedFarmId).subscribe({
      next: () => {
        this.closeDeletePopup();
        this.loadFarms();
      },
      error: (err) => {
        console.error('Delete failed', err);
        this.closeDeletePopup();
      }
    });
  }
}
