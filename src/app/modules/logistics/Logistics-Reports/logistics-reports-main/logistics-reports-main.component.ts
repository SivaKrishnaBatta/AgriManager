import { Component } from '@angular/core';

@Component({
  selector: 'app-logistics-reports-main',
  templateUrl: './logistics-reports-main.component.html',
  styleUrls: ['./logistics-reports-main.component.scss']
})
export class LogisticsReportsMainComponent {
  currentReport=1

  selectedReport(p:any){
    this.currentReport=p

}
}
