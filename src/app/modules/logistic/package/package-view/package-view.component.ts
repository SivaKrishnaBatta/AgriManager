import { Component } from '@angular/core';

@Component({
  selector: 'app-package-view',
  templateUrl: './package-view.component.html',
  styleUrls: ['./package-view.component.scss']
})
export class PackageViewComponent {
  tabs = ['Items & Description', 'Print Package'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
