import { Component } from '@angular/core';

@Component({
  selector: 'app-order-report-mains',
  templateUrl: './order-report-mains.component.html',
  styleUrls: ['./order-report-mains.component.scss']
})
export class OrderReportMainsComponent {
  currentReport=1

  selectedReport(p:any){
    this.currentReport=p
  }
}
