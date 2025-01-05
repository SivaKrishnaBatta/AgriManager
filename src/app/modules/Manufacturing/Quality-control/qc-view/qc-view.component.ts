import { Component } from '@angular/core';

@Component({
  selector: 'app-qc-view',
  templateUrl: './qc-view.component.html',
  styleUrls: ['./qc-view.component.scss']
})
export class QcViewComponent {

  QCcompleted=false ;
  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
