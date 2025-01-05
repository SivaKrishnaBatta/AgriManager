import { Component } from '@angular/core';
import { BackendConnectionService } from 'src/app/services/backendConnection/backend-connection.service';

@Component({
  selector: 'app-delivery-listing',
  templateUrl: './delivery-listing.component.html',
  styleUrls: ['./delivery-listing.component.scss']
})
export class DeliveryListingComponent {
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
