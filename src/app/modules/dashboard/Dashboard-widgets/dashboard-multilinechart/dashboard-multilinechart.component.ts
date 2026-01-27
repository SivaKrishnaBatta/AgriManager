import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard-multilinechart',
  templateUrl: './dashboard-multilinechart.component.html',
  styleUrls: ['./dashboard-multilinechart.component.scss']
})
export class DashboardMultilinechartComponent implements OnInit {
  public chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Sales Order",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Purchase Order",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Sales Order vs Purchase Order',
        align: 'center'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      }
    };
  }

  ngOnInit(): void {}
}