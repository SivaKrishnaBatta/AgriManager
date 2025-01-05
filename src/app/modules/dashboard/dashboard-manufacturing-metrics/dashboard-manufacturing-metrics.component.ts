import { Component } from '@angular/core';
import { ChartOptions } from '../dashboard-charts/dashboard-charts.component';

@Component({
  selector: 'app-dashboard-manufacturing-metrics',
  templateUrl: './dashboard-manufacturing-metrics.component.html',
  styleUrls: ['./dashboard-manufacturing-metrics.component.scss']
})
export class DashboardManufacturingMetricsComponent {
  public doughnutChartOptions: ChartOptions;

  constructor() {

    this.doughnutChartOptions = {
      series: [45, 25, 15, 15], 
      chart: {
        type: 'donut',
      },
      labels: ['BOM Usage', 'Production Planning', 'Work Orders', 'Quality Control'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };
    
  }
}
