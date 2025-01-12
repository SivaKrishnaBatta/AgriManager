import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-adding',
  templateUrl: './customer-adding.component.html',
  styleUrls: ['./customer-adding.component.scss']
})
export class CustomerAddingComponent {
  tabs = ['BILLING ADDRESS', 'SHIPPING ADDRESS'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
