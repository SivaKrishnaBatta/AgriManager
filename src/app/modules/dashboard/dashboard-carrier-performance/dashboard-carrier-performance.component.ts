import { Component } from '@angular/core';
import { ChartOptions } from '../dashboard-charts/dashboard-charts.component';

@Component({
  selector: 'app-dashboard-carrier-performance',
  templateUrl: './dashboard-carrier-performance.component.html',
  styleUrls: ['./dashboard-carrier-performance.component.scss']
})
export class DashboardCarrierPerformanceComponent {
  public doughnutChartOptions: ChartOptions;

  constructor() {

    this.doughnutChartOptions = {
      series: [35, 25, 20, 20],
      chart: {
        type: 'donut',
      },
      labels: ['FedEx', 'UPS', 'DHL', 'Delivery'],
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
