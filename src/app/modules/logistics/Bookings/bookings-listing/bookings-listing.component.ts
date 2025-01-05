import { Component } from '@angular/core';
import { BackendConnectionService } from 'src/app/services/backendConnection/backend-connection.service';

@Component({
  selector: 'app-bookings-listing',
  templateUrl: './bookings-listing.component.html',
  styleUrls: ['./bookings-listing.component.scss']
})
export class BookingsListingComponent {
  allBookings: any;

  constructor(
    private http: BackendConnectionService
  ) {
  }

  
  ngOnInit() {
    this.http.getapi('api/Cargos/GetAllCargos').subscribe((res) => {
      if (res.status) {
        this.allBookings = res.data
        console.log(this.allBookings);
      }
    });
  }

}
