import { Component } from '@angular/core';

@Component({
  selector: 'app-s-return-view',
  templateUrl: './s-return-view.component.html',
  styleUrls: ['./s-return-view.component.scss']
})
export class SReturnViewComponent {
  tabs = ['Items & Description', 'Print Supplier Return'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
