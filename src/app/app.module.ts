import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './ui-components/header/header.component';
import { SideMenuComponent } from './ui-components/side-menu/side-menu.component';
import { DashboardMainComponent } from './modules/dashboard/dashboard-main/dashboard-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiTemplateComponent } from './ui-components/ui-template/ui-template.component';
import { ManufacturingMainComponent } from './modules/Manufacturing/manufacturing-main/manufacturing-main.component';
import { BomMainComponent } from './modules/Manufacturing/BOM/bom-main/bom-main.component';
import { BomAddComponent } from './modules/Manufacturing/BOM/bom-add/bom-add.component';
import { BomListingComponent } from './modules/Manufacturing/BOM/bom-listing/bom-listing.component';
import { BomViewComponent } from './modules/Manufacturing/BOM/bom-view/bom-view.component';
import { ProductionMainComponent } from './modules/Manufacturing/production/production-main/production-main.component';
import { ProductionAddComponent } from './modules/Manufacturing/production/production-add/production-add.component';
import { ProductionViewComponent } from './modules/Manufacturing/production/production-view/production-view.component';
import { ProductionListingComponent } from './modules/Manufacturing/production/production-listing/production-listing.component';
import { WorkOrdersMainComponent } from './modules/Manufacturing/work-orders/work-orders-main/work-orders-main.component';
import { WorkOrdersAddComponent } from './modules/Manufacturing/work-orders/work-orders-add/work-orders-add.component';
import { WorkOrdersListingComponent } from './modules/Manufacturing/work-orders/work-orders-listing/work-orders-listing.component';
import { WorkOrdersViewComponent } from './modules/Manufacturing/work-orders/work-orders-view/work-orders-view.component';
import { QcMainComponent } from './modules/Manufacturing/Quality-control/qc-main/qc-main.component';
import { QcAddComponent } from './modules/Manufacturing/Quality-control/qc-add/qc-add.component';
import { QcViewComponent } from './modules/Manufacturing/Quality-control/qc-view/qc-view.component';
import { QcListingComponent } from './modules/Manufacturing/Quality-control/qc-listing/qc-listing.component';
import { ManufacturingReportsMainComponent } from './modules/Manufacturing/reports/manufacturing-reports-main/manufacturing-reports-main.component';
import { InventoryMainComponent } from './modules/Inventory/inventory-main/inventory-main.component';
import { StockMainComponent } from './modules/Inventory/stock-levels/stock-main/stock-main.component';
import { StockListingComponent } from './modules/Inventory/stock-levels/stock-listing/stock-listing.component';
import { ReplenishmentMainComponent } from './modules/Inventory/inventory-replenishment/replenishment-main/replenishment-main.component';
import { ReplenishmentListingComponent } from './modules/Inventory/inventory-replenishment/replenishment-listing/replenishment-listing.component';
import { LotMainComponent } from './modules/Inventory/lot/lot-main/lot-main.component';
import { LotListingComponent } from './modules/Inventory/lot/lot-listing/lot-listing.component';
import { LotAddComponent } from './modules/Inventory/lot/lot-add/lot-add.component';
import { InvReportsMainComponent } from './modules/Inventory/inventory-reports/inv-reports-main/inv-reports-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvDetailMainComponent } from './modules/Inventory/inventory-details/inv-detail-main/inv-detail-main.component';
import { InvDetailAddComponent } from './modules/Inventory/inventory-details/inv-detail-add/inv-detail-add.component';
import { InvDetailListingComponent } from './modules/Inventory/inventory-details/inv-detail-listing/inv-detail-listing.component';
import { InvSummeryComponent } from './modules/Inventory/inventory-reports/inv-summery/inv-summery.component';
import { StockReportSummeryComponent } from './modules/Inventory/inventory-reports/stock-report-summery/stock-report-summery.component';
import { CommittedStockDetailsComponent } from './modules/Inventory/inventory-reports/committed-stock-details/committed-stock-details.component';
import { BomInvReportComponent } from './modules/Manufacturing/reports/bom-inv-report/bom-inv-report.component';
import { ProductionScheduleReportComponent } from './modules/Manufacturing/reports/production-schedule-report/production-schedule-report.component';
import { WorkOrderStatusReportComponent } from './modules/Manufacturing/reports/work-order-status-report/work-order-status-report.component';
import { InspectionResultsReportsComponent } from './modules/Manufacturing/reports/inspection-results-reports/inspection-results-reports.component';
import { LoginComponent } from './ui-components/login/login.component';
import { SignupComponent } from './ui-components/signup/signup.component';
import { DashboardCardsComponent } from './modules/dashboard/dashboard-cards/dashboard-cards.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QuInspectionComponent } from './modules/Manufacturing/Quality-control/qu-inspection/qu-inspection.component';
import { DashboardBarchartComponent } from './modules/dashboard/dashboard-barchart/dashboard-barchart.component';
import { ScmDashboardComponent } from './modules/dashboard/scm-dashboard/scm-dashboard.component';
import { DashboardChartsComponent } from './modules/dashboard/dashboard-charts/dashboard-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardDoughnutComponent } from './modules/dashboard/dashboard-doughnut/dashboard-doughnut.component';
import { DashboardSoComponent } from './modules/dashboard/dashboard-so/dashboard-so.component';
import { DashboardPoComponent } from './modules/dashboard/dashboard-po/dashboard-po.component';
import { DashboardMultilinechartComponent } from './modules/dashboard/dashboard-multilinechart/dashboard-multilinechart.component';
import { DashboardBargraphComponent } from './modules/dashboard/dashboard-bargraph/dashboard-bargraph.component';
import { WarehouseStockLevelsComponent } from './modules/dashboard/warehouse-stock-levels/warehouse-stock-levels.component';
import { DashboardSoBreakdownComponent } from './modules/dashboard/dashboard-so-breakdown/dashboard-so-breakdown.component';
import { DashboardPoBreakdownComponent } from './modules/dashboard/dashboard-po-breakdown/dashboard-po-breakdown.component';
import { DashboardPaymentStatusComponent } from './modules/dashboard/dashboard-payment-status/dashboard-payment-status.component';
import { DashboardManufacturingMetricsComponent } from './modules/dashboard/dashboard-manufacturing-metrics/dashboard-manufacturing-metrics.component';
import { DashboardCarrierPerformanceComponent } from './modules/dashboard/dashboard-carrier-performance/dashboard-carrier-performance.component';
import { DashboardInventoryOveraTimeComponent } from './modules/dashboard/dashboard-inventory-overa-time/dashboard-inventory-overa-time.component';
import { DashboardStockTransferRequestsComponent } from './modules/dashboard/dashboard-stock-transfer-requests/dashboard-stock-transfer-requests.component';
import { DashboardPieShipmentsComponent } from './modules/dashboard/dashboard-pie-shipments/dashboard-pie-shipments.component';
import { TopCustomersSuppliersComponent } from './modules/dashboard/top-customers-suppliers/top-customers-suppliers.component';
import { InvBulkuploadComponent } from './modules/Inventory/inventory-details/inv-bulkupload/inv-bulkupload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './ui-components/page-404/page-404.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryStateCityModule } from './modules/common-components/country-state-city/country-state-city.module';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardMainComponent,
    DashboardPieShipmentsComponent,
    UiTemplateComponent,
    ManufacturingMainComponent,
    BomMainComponent,
    BomAddComponent,
    BomListingComponent,
    BomViewComponent,
    ProductionMainComponent,
    ProductionAddComponent,
    ProductionViewComponent,
    ProductionListingComponent,
    WorkOrdersMainComponent,
    WorkOrdersAddComponent,
    WorkOrdersListingComponent,
    WorkOrdersViewComponent,
    QcMainComponent,
    QcAddComponent,
    QcViewComponent,
    QcListingComponent,
    ManufacturingReportsMainComponent,
    InventoryMainComponent,
    StockMainComponent,
    StockListingComponent,
    ReplenishmentMainComponent,
    ReplenishmentListingComponent,
    LotMainComponent,
    LotListingComponent,
    LotAddComponent,
    InvReportsMainComponent,
    InvDetailMainComponent,
    InvDetailAddComponent,
    InvSummeryComponent,
    StockReportSummeryComponent,
    CommittedStockDetailsComponent,
    InvDetailListingComponent,
    BomInvReportComponent,
    ProductionScheduleReportComponent,
    WorkOrderStatusReportComponent,
    InspectionResultsReportsComponent,
    LoginComponent,
    SignupComponent,
    DashboardCardsComponent,
    QuInspectionComponent,
    DashboardBarchartComponent,
    ScmDashboardComponent,
    DashboardChartsComponent,
    DashboardDoughnutComponent,
    DashboardSoComponent,
    DashboardPoComponent,
    DashboardMultilinechartComponent,
    DashboardBargraphComponent,
    WarehouseStockLevelsComponent,
    DashboardSoBreakdownComponent,
    DashboardPoBreakdownComponent,
    DashboardPaymentStatusComponent,
    DashboardManufacturingMetricsComponent,
    DashboardCarrierPerformanceComponent,
    DashboardInventoryOveraTimeComponent,
    DashboardStockTransferRequestsComponent,
    TopCustomersSuppliersComponent,
    InvBulkuploadComponent,
     Page404Component,
    
    
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgApexchartsModule,
    NgxChartsModule,
    HttpClientModule,
    CountryStateCityModule,
   
    
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class AppModule { }
