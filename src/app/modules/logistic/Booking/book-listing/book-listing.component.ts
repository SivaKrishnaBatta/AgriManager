import { Component } from '@angular/core';
import { BackendConnectionService } from 'src/app/services/backendConnection/backend-connection.service';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.scss']
})
export class BookListingComponent {
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
