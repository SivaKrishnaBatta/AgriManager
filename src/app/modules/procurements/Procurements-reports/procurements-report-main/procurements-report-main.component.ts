import { Component } from '@angular/core';

@Component({
  selector: 'app-procurements-report-main',
  templateUrl: './procurements-report-main.component.html',
  styleUrls: ['./procurements-report-main.component.scss']
})
export class ProcurementsReportMainComponent {
  currentReport=1

  selectedReport(p:any){
    this.currentReport=p
  }

}
