import { Component, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexPlotOptions
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: string[];
  plotOptions?: ApexPlotOptions;
};


@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.scss']
})
export class DashboardChartsComponent {
  public gaugeChartOptions: ChartOptions;
  public doughnutChartOptions: ChartOptions;

  constructor() {
    // Radial Gauge Chart Configuration
    this.gaugeChartOptions = {
      series: [75], // The progress percentage
      chart: {
        type: 'radialBar',
        height: 350
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: '22px',
              color: '#000',
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '16px',
              color: '#000',
              offsetY: 5,
              formatter: (val: number) => `${val}%`
            }
          }
        }
      },
      labels: ['Progress'], 
      responsive: [] 
    };

    this.doughnutChartOptions = {
      series: [45, 25, 15, 15], 
      chart: {
        type: 'donut',
      },
      labels: ['BOM Usage', 'Production Planning', 'Work Orders', 'Quality Control'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };
    
  }
}
