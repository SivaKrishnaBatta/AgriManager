import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse-details-view',
  templateUrl: './warehouse-details-view.component.html',
  styleUrls: ['./warehouse-details-view.component.scss']
})
export class WarehouseDetailsViewComponent  implements OnInit {
  productsInbound: string = 'No Products Available';
  productRequests: number = 0;
  productsOutboundToday: number = 0;
  stockAdjustmentRequests: number = 0;
  outboundLast7Days: string = 'No Data';
  outboundStats: string = 'No Data';

  constructor() {}

  ngOnInit(): void {
    // You can initialize data from API calls here
  }



}
