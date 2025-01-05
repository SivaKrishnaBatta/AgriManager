import { Component } from '@angular/core';

@Component({
  selector: 'app-ro-view',
  templateUrl: './ro-view.component.html',
  styleUrls: ['./ro-view.component.scss']
})
export class RoViewComponent {
  tabs = ['Items & Description', 'Print RMA'];
    selectedTab = 0;
  
    selectTab(tabName: any) {
      this.selectedTab = tabName;
    }
  }


