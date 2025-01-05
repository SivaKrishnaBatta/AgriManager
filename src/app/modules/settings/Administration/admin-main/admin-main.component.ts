import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent {

  currentReport=1

  selectedReport(p:any){
    this.currentReport=p
  }

}
