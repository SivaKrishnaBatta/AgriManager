import { Component } from '@angular/core';

@Component({
  selector: 'app-shipments-view',
  templateUrl: './shipments-view.component.html',
  styleUrls: ['./shipments-view.component.scss']
})
export class ShipmentsViewComponent {
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
