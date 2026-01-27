import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-inventory-overa-time',
  templateUrl: './dashboard-inventory-overa-time.component.html',
  styleUrls: ['./dashboard-inventory-overa-time.component.scss']
})
export class DashboardInventoryOveraTimeComponent {
  public lineChartOptions: any = {
    series: [
      {
        name: "Inventory Levels",
        data: [350, 420, 390, 410, 370, 430, 410, 395, 420] // Example inventory level data
      }
    ],
    chart: {
      type: 'line',
      height: 350
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"] // Time periods (months)
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth' // Smooth curve for a better visual representation
    },
    colors: ['#FF9800'], // Line color for inventory levels
    title: {
      text: "Inventory Levels Over Time",
      align: 'left'
    }
  };
}
