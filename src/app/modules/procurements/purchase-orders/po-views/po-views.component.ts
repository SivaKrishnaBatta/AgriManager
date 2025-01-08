import { Component } from '@angular/core';

@Component({
  selector: 'app-po-views',
  templateUrl: './po-views.component.html',
  styleUrls: ['./po-views.component.scss']
})
export class PoViewsComponent {
  tabs = ['Items & Description', 'Print Purchase Order Order'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }
}
