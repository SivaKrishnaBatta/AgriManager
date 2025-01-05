import { Component } from '@angular/core';
import { BackendConnectionService } from 'src/app/services/backendConnection/backend-connection.service';

@Component({
  selector: 'app-carrier-listing',
  templateUrl: './carrier-listing.component.html',
  styleUrls: ['./carrier-listing.component.scss']
})
export class CarrierListingComponent {

  allcarriers: any;

  constructor(
    private http: BackendConnectionService
  ) {
  }

  
  ngOnInit() {
    this.http.getapi('api/Carrier/GetAllCarriers').subscribe((res) => {
      if (res.status) {
        this.allcarriers = res.data
        console.log(this.allcarriers);
      }
    });
  }

}
