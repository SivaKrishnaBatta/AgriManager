import { Component } from '@angular/core';

@Component({
  selector: 'app-po-view',
  templateUrl: './po-view.component.html',
  styleUrls: ['./po-view.component.scss']
})
export class PoViewComponent {
  
  tabs = ['Items & Description', 'Print Purchase Order Order'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }
}
