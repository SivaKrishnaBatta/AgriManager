import { Component } from '@angular/core';

@Component({
  selector: 'app-add-crop',
  templateUrl: './add-crop.component.html',
  styleUrls: ['./add-crop.component.scss']
})
export class AddCropComponent {
farms = [
    { id: 1, name: 'Green Farm' },
    { id: 2, name: 'Sunrise Farm' }
  ];

  fields = [
    { id: 1, name: 'Field A' },
    { id: 2, name: 'Field B' }
  ];

  crop = {
    farmId: '',
    fieldId: '',
    cropName: '',
    season: '',
    startDate: '',
    expectedEndDate: '',
    expectedYield: ''
  }
}
