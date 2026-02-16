import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CropService } from 'src/app/services/crop/crop.service';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html'
})
export class CropDetailsComponent implements OnInit {

  crop: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cropService: CropService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadCropDetails(id);
    }
  }

  loadCropDetails(id: number) {
    this.cropService.getCropById(id).subscribe({
      next: (res:any) => {
        this.crop = res.data;
      },
      error: (err) => {
        console.error('Error loading crop details', err);
      }
    });
  }

  goBack() {
    this.router.navigate(['/agri/crops/list']);
  }
}
