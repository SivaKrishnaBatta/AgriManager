import { Component } from '@angular/core';

@Component({
  selector: 'app-payments-view',
  templateUrl: './payments-view.component.html',
  styleUrls: ['./payments-view.component.scss']
})
export class PaymentsViewComponent {


    tabs = ['Items & Description', 'Print Payments'];
    selectedTab = 0;
  
    selectTab(tabName: any) {
      this.selectedTab = tabName;
    }

}
