import { Component } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent {
  tabs = ['Items & Description', 'Print Cargo'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }
}
