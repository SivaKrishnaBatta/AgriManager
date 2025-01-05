import { Component } from '@angular/core';

@Component({
  selector: 'app-quote-view',
  templateUrl: './quote-view.component.html',
  styleUrls: ['./quote-view.component.scss']
})
export class QuoteViewComponent {

  tabs = ['Items & Description', 'Print Qute'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }
}
