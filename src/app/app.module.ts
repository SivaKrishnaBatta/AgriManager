import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './ui-components/header/header.component';
import { SideMenuComponent } from './ui-components/side-menu/side-menu.component';
import { DashboardMainComponent } from './modules/dashboard/Dashboard-widgets/DashboardSummaryComponent/dashboard-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiTemplateComponent } from './ui-components/ui-template/ui-template.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { LoginComponent } from './ui-components/login/login.component';
import { SignupComponent } from './ui-components/signup/signup.component';
// import { DashboardCardsComponent } from './modules/dashboard/Dashboard-widgets/dashboard-cards/dashboard-cards.component';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ScmDashboardComponent } from './modules/dashboard/Dashboard-widgets/scm-dashboard/scm-dashboard.component';
import { DashboardChartsComponent } from './modules/dashboard/Dashboard-widgets/dashboard-charts/dashboard-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardDoughnutComponent } from './modules/dashboard/Dashboard-widgets/dashboard-doughnut/dashboard-doughnut.component';
import { DashboardSoComponent } from './modules/dashboard/Dashboard-widgets/dashboard-so/dashboard-so.component';
import { DashboardPoComponent } from './modules/dashboard/Dashboard-widgets/dashboard-po/dashboard-po.component';
import { DashboardMultilinechartComponent } from './modules/dashboard/Dashboard-widgets/dashboard-multilinechart/dashboard-multilinechart.component';
import { DashboardBargraphComponent } from './modules/dashboard/Dashboard-widgets/dashboard-bargraph/dashboard-bargraph.component';
import { WarehouseStockLevelsComponent } from './modules/dashboard/Dashboard-widgets/warehouse-stock-levels/warehouse-stock-levels.component';
import { DashboardSoBreakdownComponent } from './modules/dashboard/Dashboard-widgets/dashboard-so-breakdown/dashboard-so-breakdown.component';
import { DashboardPoBreakdownComponent } from './modules/dashboard/Dashboard-widgets/dashboard-po-breakdown/dashboard-po-breakdown.component';
import { DashboardPaymentStatusComponent } from './modules/dashboard/Dashboard-widgets/dashboard-payment-status/dashboard-payment-status.component';
import { DashboardCarrierPerformanceComponent } from './modules/dashboard/Dashboard-widgets/dashboard-carrier-performance/dashboard-carrier-performance.component';
import { DashboardInventoryOveraTimeComponent } from './modules/dashboard/Dashboard-widgets/dashboard-inventory-overa-time/dashboard-inventory-overa-time.component';
import { DashboardStockTransferRequestsComponent } from './modules/dashboard/Dashboard-widgets/dashboard-stock-transfer-requests/dashboard-stock-transfer-requests.component';
import { DashboardPieShipmentsComponent } from './modules/dashboard/Dashboard-widgets/dashboard-pie-shipments/dashboard-pie-shipments.component';
import { TopCustomersSuppliersComponent } from './modules/dashboard/Dashboard-widgets/top-customers-suppliers/top-customers-suppliers.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './ui-components/page-404/page-404.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryStateCityModule } from './modules/common-components/country-state-city/country-state-city.module';
import { DashboardManufacturingMetricsComponent } from './modules/dashboard/Dashboard-widgets/dashboard-manufacturing-metrics/dashboard-manufacturing-metrics.component';

import { DashboardBarchartComponent } from './modules/dashboard/dashboard-barchart/dashboard-barchart.component';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardMainComponent,
    DashboardPieShipmentsComponent,
    UiTemplateComponent,
   
    
    
    
   
  
    LoginComponent,
    SignupComponent,
    // DashboardCardsComponent,

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
    
    Page404Component,
  
  
    
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
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
