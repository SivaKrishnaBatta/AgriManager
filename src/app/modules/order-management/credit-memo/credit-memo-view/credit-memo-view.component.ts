import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-memo-view',
  templateUrl: './credit-memo-view.component.html',
  styleUrls: ['./credit-memo-view.component.scss']
})
export class CreditMemoViewComponent {


    tabs = ['Items & Description', 'Print Credit Memo'];
    selectedTab = 0;
  
    selectTab(tabName: any) {
      this.selectedTab = tabName;
    }

}
