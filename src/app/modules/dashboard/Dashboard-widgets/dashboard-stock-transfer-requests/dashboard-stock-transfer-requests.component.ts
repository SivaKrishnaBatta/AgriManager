import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-stock-transfer-requests',
  templateUrl: './dashboard-stock-transfer-requests.component.html',
  styleUrls: ['./dashboard-stock-transfer-requests.component.scss']
})
export class DashboardStockTransferRequestsComponent {
  public lineChartOptions: any = {
    series: [
      {
        name: "Stock Transfer Requests",
        data: [5, 15, 12, 20, 18, 25, 30, 28, 35] // Example data for stock transfer form requests
      }
    ],
    chart: {
      type: 'line',
      height: 350
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"] // Months or other time periods
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth' // For a smoother line appearance
    },
    colors: ['#4CAF50'], // Line color for stock transfer requests
    title: {
      text: "Stock Transfer Form Requests Over Time",
      align: 'left'
    },
  };
}
