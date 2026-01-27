import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-so',
  templateUrl: './dashboard-so.component.html',
  styleUrls: ['./dashboard-so.component.scss']
})
export class DashboardSoComponent {
  public barChartOptions: any = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };

}
