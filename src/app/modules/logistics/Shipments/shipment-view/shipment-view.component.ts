import { Component } from '@angular/core';

@Component({
  selector: 'app-shipment-view',
  templateUrl: './shipment-view.component.html',
  styleUrls: ['./shipment-view.component.scss']
})
export class ShipmentViewComponent {

tabs = ['Items & Description', 'Print Shipment'];
selectedTab = 0;

selectTab(tabName: any) {
  this.selectedTab = tabName;
}


isModalOpen = false;
openModal() {
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
}

}
