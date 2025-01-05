import { Component } from '@angular/core';

@Component({
  selector: 'app-inv-reports-main',
  templateUrl: './inv-reports-main.component.html',
  styleUrls: ['./inv-reports-main.component.scss']
})
export class InvReportsMainComponent {

  currentReport=1

  selectedReport(p:any){
    this.currentReport=p
  }
}
