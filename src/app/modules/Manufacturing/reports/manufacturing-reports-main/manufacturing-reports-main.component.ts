import { Component } from '@angular/core';

@Component({
  selector: 'app-manufacturing-reports-main',
  templateUrl: './manufacturing-reports-main.component.html',
  styleUrls: ['./manufacturing-reports-main.component.scss']
})
export class ManufacturingReportsMainComponent {
  currentReport=1

  selectedReport(p:any){
    this.currentReport=p
  }

}
