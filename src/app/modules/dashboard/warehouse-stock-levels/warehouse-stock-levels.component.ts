import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-warehouse-stock-levels',
  templateUrl: './warehouse-stock-levels.component.html',
  styleUrls: ['./warehouse-stock-levels.component.scss']
})
export class WarehouseStockLevelsComponent {
  warehouseSeries: ApexAxisChartSeries = [
    {
      name: 'Stock Levels',
      data: [1200, 1400, 1300, 1100, 1500, 1700, 1430]
    }
  ];
  warehouseChart: ApexChart = {
    type: 'bar',
    height:400
  };
  warehouseXaxis: ApexXAxis = {
    categories: ['Titan Hub', 'Nexus Center', 'Aurora Hub', 'Quantum Facility', 'Eclipse Hub', 'Summit Center', 'Pinnacle Vault']
  };

}
