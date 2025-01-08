import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-mains',
  templateUrl: './admin-mains.component.html',
  styleUrls: ['./admin-mains.component.scss']
})
export class AdminMainsComponent {
  currentReport=1

  selectedReport(p:any){
    this.currentReport=p
  }

}
