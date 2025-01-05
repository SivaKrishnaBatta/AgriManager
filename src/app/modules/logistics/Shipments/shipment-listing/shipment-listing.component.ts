import { Component } from '@angular/core';
import { BackendConnectionService } from 'src/app/services/backendConnection/backend-connection.service';

@Component({
  selector: 'app-shipment-listing',
  templateUrl: './shipment-listing.component.html',
  styleUrls: ['./shipment-listing.component.scss']
})
export class ShipmentListingComponent {
  allShippingMethod: any;
  AllShipments: any;
  constructor(
    private http: BackendConnectionService
  ) { }
  ngOnInit() {
    this.http.getapi('api/Shipment/GetAllShipments').subscribe((res) => {
      console.log(res)
      if(res.status){
        this.AllShipments=res.data
      }
    });
  }
}
