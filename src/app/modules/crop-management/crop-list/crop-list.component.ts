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

  showDeletePopup:boolean=false;
  selectedCropId:number | null=null;

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

  openDeletePopup(id:number):void{
    this.selectedCropId=id;
    this.showDeletePopup=true
  }

  closeDeletePopup():void{
    this.selectedCropId= null;
    this.showDeletePopup= false
  }

confirmDelete(): void {
    if (!this.selectedCropId) return;

    this.cropService.deleteCrop(this.selectedCropId).subscribe({
      next: () => {
        this.cropsList = this.cropsList.filter(
          c => c.cropId !== this.selectedCropId
        );
        this.closeDeletePopup();
      },
      error: (err) => {
        console.error('Delete failed', err);
        this.closeDeletePopup();
      }
    });
  }


}
