import { Component } from '@angular/core';

@Component({
  selector: 'app-credits-memo-view',
  templateUrl: './credits-memo-view.component.html',
  styleUrls: ['./credits-memo-view.component.scss']
})
export class CreditsMemoViewComponent {
  tabs = ['Items & Description', 'Print Credit Memo'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
