import { Component } from '@angular/core';

@Component({
  selector: 'app-logistic-report-main',
  templateUrl: './logistic-report-main.component.html',
  styleUrls: ['./logistic-report-main.component.scss']
})
export class LogisticReportMainComponent {
  currentReport=1

  selectedReport(p:any){
    this.currentReport=p

}

}
