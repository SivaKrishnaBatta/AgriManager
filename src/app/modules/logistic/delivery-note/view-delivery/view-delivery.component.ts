import { Component } from '@angular/core';

@Component({
  selector: 'app-view-delivery',
  templateUrl: './view-delivery.component.html',
  styleUrls: ['./view-delivery.component.scss']
})
export class ViewDeliveryComponent {
  tabs = ['Items & Description', ' Print Delivery Note'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
