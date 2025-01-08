import { Component } from '@angular/core';

@Component({
  selector: 'app-listing-freight',
  templateUrl: './listing-freight.component.html',
  styleUrls: ['./listing-freight.component.scss']
})
export class ListingFreightComponent {
  currentReport=1

  selectedReport(p:any){
    this.currentReport=p
  }  

}
