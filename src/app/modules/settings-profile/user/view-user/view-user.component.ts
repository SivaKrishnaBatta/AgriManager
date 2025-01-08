import { Component } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent {
  tabs = ['User Details', 'User Roles'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

  Reset=false ;
  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }



}
