import { Component } from '@angular/core';

@Component({
  selector: 'app-freight-listing',
  templateUrl: './freight-listing.component.html',
  styleUrls: ['./freight-listing.component.scss']
})
export class FreightListingComponent {

  currentReport=1

  selectedReport(p:any){
    this.currentReport=p
  }
}
