import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-so-breakdown',
  templateUrl: './dashboard-so-breakdown.component.html',
  styleUrls: ['./dashboard-so-breakdown.component.scss']
})
export class DashboardSoBreakdownComponent {
  public pieChartOptions: any = {
    series: [44, 55, 71, 10],
    chart: {
      width: 380,
      type: 'pie'
    },
    labels: ['Completed', 'Pending', 'In Progress','Returned'],
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
