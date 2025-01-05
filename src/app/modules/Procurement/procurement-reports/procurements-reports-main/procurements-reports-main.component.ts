import { Component } from '@angular/core';

@Component({
  selector: 'app-procurements-reports-main',
  templateUrl: './procurements-reports-main.component.html',
  styleUrls: ['./procurements-reports-main.component.scss']
})
export class ProcurementsReportsMainComponent {
  currentReport=1

  selectedReport(p:any){
    this.currentReport=p
  }

}
