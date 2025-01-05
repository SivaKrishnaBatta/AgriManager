import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-template',
  templateUrl: './ui-template.component.html',
  styleUrls: ['./ui-template.component.scss']
})
export class UiTemplateComponent {

  tabs = ['Overview', 'Comments', 'Transactions', 'Mails', 'Statements', "add"];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }


  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
