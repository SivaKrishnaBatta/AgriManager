import { Component } from '@angular/core';

@Component({
  selector: 'app-invoices-view',
  templateUrl: './invoices-view.component.html',
  styleUrls: ['./invoices-view.component.scss']
})
export class InvoicesViewComponent {
  tabs = ['Items & Description', 'Print invoice'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }
}
