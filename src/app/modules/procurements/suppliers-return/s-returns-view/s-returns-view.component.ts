import { Component } from '@angular/core';

@Component({
  selector: 'app-s-returns-view',
  templateUrl: './s-returns-view.component.html',
  styleUrls: ['./s-returns-view.component.scss']
})
export class SReturnsViewComponent {
  tabs = ['Items & Description', 'Print Supplier Return'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }
}
