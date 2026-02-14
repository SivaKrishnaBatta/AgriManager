import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropService } from 'src/app/services/crop/crop.service';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.scss']
})
export class CropListComponent implements OnInit {

  cropsList: any[] = [];

  constructor(
    private router: Router,
    private cropService: CropService
  ) {}

  ngOnInit(): void {
    this.loadCrops();
  }

  loadCrops() {
    this.cropService.getCrops().subscribe({
      next: (res:any) => {
        this.cropsList = res.data;
      },
      error: (err) => {
        console.error('Error loading crops', err);
      }
    });
  }

  addCrop() {
    this.router.navigate(['/agri/crops/add']);
  }

  editCrop(id: number) {
    this.router.navigate(['/agri/crops/edit', id]);
  }

  viewCrop(id: number) {
    this.router.navigate(['/agri/crops/view', id]);
  }

deleteCrop(id: number, event?: Event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (!confirm('Are you sure you want to delete this crop?')) return;

  this.cropService.deleteCrop(id).subscribe({
    next: () => {
      //  THIS LINE IS CRITICAL
      this.cropsList = this.cropsList.filter(c => c.cropId !== id);
    },
    error: (err) => {
      console.error('Delete failed', err);
    }
  });
}


}
