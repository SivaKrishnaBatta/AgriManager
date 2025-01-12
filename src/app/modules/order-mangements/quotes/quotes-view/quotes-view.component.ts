import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes-view',
  templateUrl: './quotes-view.component.html',
  styleUrls: ['./quotes-view.component.scss']
})
export class QuotesViewComponent {
  tabs = ['Items & Description', 'Print Qute'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
