import { Component } from '@angular/core';

@Component({
  selector: 'app-packages-view',
  templateUrl: './packages-view.component.html',
  styleUrls: ['./packages-view.component.scss']
})
export class PackagesViewComponent {
  tabs = ['Items & Description', 'Print Package'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
