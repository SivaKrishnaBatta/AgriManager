import { Component } from '@angular/core';

@Component({
  selector: 'app-bom-view',
  templateUrl: './bom-view.component.html',
  styleUrls: ['./bom-view.component.scss']
})
export class BomViewComponent {
  tabs = ['Overview', 'Comments', 'Transactions', 'Mails', 'Statements', 'Add'];
  selectedTab = 0;

  selectTab(index: number) {
    this.selectedTab = index;
  }
}

