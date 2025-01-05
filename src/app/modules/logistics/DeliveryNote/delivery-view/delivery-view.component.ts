import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-view',
  templateUrl: './delivery-view.component.html',
  styleUrls: ['./delivery-view.component.scss']
})
export class DeliveryViewComponent {
  
  tabs = ['Items & Description', ' Print Delivery Note'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
