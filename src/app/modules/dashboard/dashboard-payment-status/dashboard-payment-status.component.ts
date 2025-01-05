import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-payment-status',
  templateUrl: './dashboard-payment-status.component.html',
  styleUrls: ['./dashboard-payment-status.component.scss']
})
export class DashboardPaymentStatusComponent {
  public pieChartOptions: any = {
    series: [60, 25, 10, 5], 
    chart: {
      width: 380,
      type: 'pie'
    },
    labels: ['Paid In Full', 'Partially Paid', 'Overdue', 'Unpaid'],
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


