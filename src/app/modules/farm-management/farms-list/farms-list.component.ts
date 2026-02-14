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

  constructor(
    private farmService: FarmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFarms();
  }

  loadFarms() {
    this.farmService.getFarms().subscribe((res: any) => {
      // Get data from backend
      this.farms = res.data || [];

      // ✅ Sort by real backend ID (or change to any field you want)
      this.farms.sort((a, b) => a.farmId - b.farmId);
    });
  }

  addFarm() {
    this.router.navigate(['/agri/farms/add']);
  }

  editFarm(id: number) {
    this.router.navigate(['/agri/farms/edit', id]);
  }

  viewFarm(id: number) {
    this.router.navigate(['/agri/farms/view', id]);
  }

  deleteFarm(id: number) {
    if (confirm('Are you sure you want to delete this farm?')) {
      this.farmService.deleteFarm(id).subscribe({
        next: () => {
          // ✅ Reload list → sorted → UI re-indexed automatically
          this.loadFarms();
        },
        error: (err) => {
          console.error('Delete failed', err);
          alert('Failed to delete farm');
        }
      });
    }
  }
}
