import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html'
})
export class CropDetailsComponent implements OnInit {

  crop: any;

  crops = [
    {
      id: 1,
      cropName: 'Rice',
      farmName: 'Green Farm',
      fieldName: 'Field A',
      status: 'Active',
      startDate: '01 Jan 2026',
      endDate: '-',
      notes: 'Kharif crop'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.crop = this.crops.find(c => c.id === id);
  }

  goBack() {
    this.router.navigate(['/agri/crops/list']);
  }
}

