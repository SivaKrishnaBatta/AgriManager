import { Component } from '@angular/core';

@Component({
  selector: 'app-order-reports-main',
  templateUrl: './order-reports-main.component.html',
  styleUrls: ['./order-reports-main.component.scss']
})
export class OrderReportsMainComponent {

  currentReport=1

  selectedReport(p:any){
    this.currentReport=p
  }
}
