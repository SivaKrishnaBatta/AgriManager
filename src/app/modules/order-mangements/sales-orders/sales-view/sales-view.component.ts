import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-view',
  templateUrl: './sales-view.component.html',
  styleUrls: ['./sales-view.component.scss']
})
export class SalesViewComponent {
  tabs = ['Items & Description', 'Print Sales Order'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
