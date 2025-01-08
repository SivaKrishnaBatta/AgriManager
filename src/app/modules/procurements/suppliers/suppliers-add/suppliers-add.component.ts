import { Component } from '@angular/core';

@Component({
  selector: 'app-suppliers-add',
  templateUrl: './suppliers-add.component.html',
  styleUrls: ['./suppliers-add.component.scss']
})
export class SuppliersAddComponent {
  tabs = ['BILLING ADDRESS', 'SHIPPING ADDRESS'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }
}
