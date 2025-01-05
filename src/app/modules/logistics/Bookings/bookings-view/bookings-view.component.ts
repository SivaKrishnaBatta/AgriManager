import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings-view',
  templateUrl: './bookings-view.component.html',
  styleUrls: ['./bookings-view.component.scss']
})
export class BookingsViewComponent {

  tabs = ['Items & Description', 'Print Cargo'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }
}
