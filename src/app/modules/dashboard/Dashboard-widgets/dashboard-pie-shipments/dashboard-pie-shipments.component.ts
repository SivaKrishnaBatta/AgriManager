import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-pie-shipments',
  templateUrl: './dashboard-pie-shipments.component.html',
  styleUrls: ['./dashboard-pie-shipments.component.scss']
})
export class DashboardPieShipmentsComponent {
  public pieChartOptions: any = {
    series: [40, 35, 25],
    chart: {
      width: 380,
      type: 'pie'
    },
    labels: ['Shipped', 'Delivered', 'Returned'], 
    colors: ['#FEBC3B', '#26E7A6', '#FF6178'], //#2196F3
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
