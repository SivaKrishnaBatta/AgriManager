import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-scm-dashboard',
  templateUrl: './scm-dashboard.component.html',
  styleUrls: ['./scm-dashboard.component.scss']
})
export class ScmDashboardComponent implements OnInit {
  
 // Dummy data for stock levels
 warehouseSeries: ApexAxisChartSeries = [
  {
    name: 'Stock Levels',
    data: [1200, 1400, 1300, 1100, 1500, 1700]
  }
];
warehouseChart: ApexChart = {
  type: 'bar',
  height: 250
};
warehouseXaxis: ApexXAxis = {
  categories: ['Warehouse 1', 'Warehouse 2', 'Warehouse 3', 'Warehouse 4', 'Warehouse 5']
};

// Dummy data for products inbound (last 7 days)
inboundSeries: ApexAxisChartSeries = [
  {
    name: 'Products Inbound',
    data: [30, 50, 70, 60, 90, 100, 80]
  }
];
inboundXaxis: ApexXAxis = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

// Dummy data for products outbound (today)
outboundSeries: ApexAxisChartSeries = [
  {
    name: 'Products Outbound',
    data: [40, 60, 50, 80, 100, 120, 90]
  }
];
outboundXaxis: ApexXAxis = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

// Dummy data for shipment tracking
shipmentSeries: ApexAxisChartSeries = [
  {
    name: 'Shipment Status',
    data: [10, 20, 15, 25, 30, 35, 40]
  }
];
shipmentXaxis: ApexXAxis = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

// Chart configuration for line charts
lineChart: ApexChart = {
  type: 'line',
  height: 250
};

// Dummy data for Stock Adjustment Requests
stockAdjustmentSeries: ApexAxisChartSeries = [
  {
    name: 'Stock Adjustments',
    data: [5, 7, 3, 8, 6, 9, 4]
  }
];
stockAdjustmentXaxis: ApexXAxis = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

// Dummy data for Product Requests
productRequestSeries: ApexAxisChartSeries = [
  {
    name: 'Product Requests',
    data: [10, 15, 13, 12, 20, 17, 22]
  }
];
productRequestXaxis: ApexXAxis = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

// Dummy data for Add Stock into Warehouse
addStockSeries: ApexAxisChartSeries = [
  {
    name: 'Stock Added',
    data: [30, 40, 35, 50, 45, 55, 60]
  }
];
addStockXaxis: ApexXAxis = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

// Dummy data for Product Delivery Details
deliveryDetailsSeries: ApexAxisChartSeries = [
  {
    name: 'Products Delivered',
    data: [20, 18, 25, 22, 30, 28, 35]
  }
];
deliveryDetailsXaxis: ApexXAxis = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

// Chart config
//   lineChart: ApexChart = {
//   type: 'line',
//   height: 250
// };

// Product requests and adjustments
productRequests = 4;
stockAdjustments = 2;


  constructor() {}

  ngOnInit(): void {}

}
