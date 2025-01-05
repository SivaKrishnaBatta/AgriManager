import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-po-breakdown',
  templateUrl: './dashboard-po-breakdown.component.html',
  styleUrls: ['./dashboard-po-breakdown.component.scss']
})
export class DashboardPoBreakdownComponent {
  public pieChartOptions: any = {
    series: [35, 25, 20, 20],
    chart: {
      width: 380,
      type: 'pie'
    },
    labels: ['Open','Received','Pending','Cancelled'],
    colors: ['#26E7A6', '#FEBC3B', '#2196F3','#FF6178'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
}
