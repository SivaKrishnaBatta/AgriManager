import { Component } from '@angular/core';

@Component({
  selector: 'app-qc-views',
  templateUrl: './qc-views.component.html',
  styleUrls: ['./qc-views.component.scss']
})
export class QcViewsComponent {
  QCcompleted=false ;
  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
