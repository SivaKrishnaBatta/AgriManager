import { Component } from '@angular/core';
import { BackendConnectionService } from 'src/app/services/backendConnection/backend-connection.service';

@Component({
  selector: 'app-listing-delivery',
  templateUrl: './listing-delivery.component.html',
  styleUrls: ['./listing-delivery.component.scss']
})
export class ListingDeliveryComponent {
   AllDeliveries: any;
    constructor(
      private http: BackendConnectionService
    ) { }
    ngOnInit() {
      this.http.getapi('api/Delivery/GetAllDeliveries').subscribe((res) => {
        console.log(res)
        if(res.status){
          this.AllDeliveries=res.data
        }
      });
    }

}
