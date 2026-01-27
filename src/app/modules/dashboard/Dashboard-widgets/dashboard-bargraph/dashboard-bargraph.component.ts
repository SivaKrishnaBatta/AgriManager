import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexDataLabels,
} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard-bargraph',
  templateUrl: './dashboard-bargraph.component.html',
  styleUrls: ['./dashboard-bargraph.component.scss']
})
export class DashboardBargraphComponent implements OnInit {
  public chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    plotOptions: ApexPlotOptions;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Quotes",
          data: [44, 55, 41, 67, 22, 43, 21,39,57]
        },
        {
          name: "Sales Order",
          data: [53, 32, 33, 52, 13, 44, 52,30,47]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: false, // Set to false for separate bars
      },
      plotOptions: {
        bar: {
          columnWidth: '50%', // Adjust this for spacing between bars
          borderRadius: 0, // Rounded bars (optional)
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep'],
      },
      title: {
        // text: 'Sales Order & Purchase Order overview',
        align: 'center'
      },
    };
  }

  ngOnInit(): void {}
}