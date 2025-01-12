import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.scss']
})
export class PaymentViewComponent {
  tabs = ['Items & Description', 'Print Payments'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }


}
