import { Component } from '@angular/core';
import { BackendConnectionService } from 'src/app/services/backendConnection/backend-connection.service';

@Component({
  selector: 'app-listing-carrier',
  templateUrl: './listing-carrier.component.html',
  styleUrls: ['./listing-carrier.component.scss']
})
export class ListingCarrierComponent {
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
