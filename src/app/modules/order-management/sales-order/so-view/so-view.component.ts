import { Component } from '@angular/core';

@Component({
  selector: 'app-so-view',
  templateUrl: './so-view.component.html',
  styleUrls: ['./so-view.component.scss']
})
export class SoViewComponent {

  tabs = ['Items & Description', 'Print Sales Order'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }
}
