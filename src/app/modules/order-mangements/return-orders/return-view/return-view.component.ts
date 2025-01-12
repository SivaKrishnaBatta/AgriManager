import { Component } from '@angular/core';

@Component({
  selector: 'app-return-view',
  templateUrl: './return-view.component.html',
  styleUrls: ['./return-view.component.scss']
})
export class ReturnViewComponent {

  tabs = ['Items & Description', 'Print RMA'];
    selectedTab = 0;
  
    selectTab(tabName: any) {
      this.selectedTab = tabName;
    }
}
