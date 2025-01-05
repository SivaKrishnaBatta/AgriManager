import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent {
  tabs = ['BILLING ADDRESS', 'SHIPPING ADDRESS'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
