import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-po',
  templateUrl: './dashboard-po.component.html',
  styleUrls: ['./dashboard-po.component.scss']
})
export class DashboardPoComponent {
  public barChartOptions: any = {
    series: [
      {
        name: 'Net Profit',
        data: [74, 85, 57, 96, 61, 28, 63, 60, 66]
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
