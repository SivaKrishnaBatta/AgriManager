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
import { OrderMainComponent } from './modules/order-management/order-main/order-main.component';
import { CustomerMainComponent } from './modules/order-management/customers/customer-main/customer-main.component';
import { SoMainComponent } from './modules/order-management/sales-order/so-main/so-main.component';
import { CustomerListingComponent } from './modules/order-management/customers/customer-listing/customer-listing.component';
import { CustomerAddComponent } from './modules/order-management/customers/customer-add/customer-add.component';
import { CustomerViewComponent } from './modules/order-management/customers/customer-view/customer-view.component';
import { SoListingComponent } from './modules/order-management/sales-order/so-listing/so-listing.component';
import { SoAddComponent } from './modules/order-management/sales-order/so-add/so-add.component';
import { SoViewComponent } from './modules/order-management/sales-order/so-view/so-view.component';
import { InvoiceMainComponent } from './modules/order-management/invoice/invoice-main/invoice-main.component';
import { InvoiceListingComponent } from './modules/order-management/invoice/invoice-listing/invoice-listing.component';
import { InvoiceAddComponent } from './modules/order-management/invoice/invoice-add/invoice-add.component';
import { InvoiceViewComponent } from './modules/order-management/invoice/invoice-view/invoice-view.component';
import { PaymentsListingComponent } from './modules/order-management/payments/payments-listing/payments-listing.component';
import { PaymentsMainComponent } from './modules/order-management/payments/payments-main/payments-main.component';
import { PaymentsAddComponent } from './modules/order-management/payments/payments-add/payments-add.component';
import { PaymentsViewComponent } from './modules/order-management/payments/payments-view/payments-view.component';
import { RoMainComponent } from './modules/order-management/returnOrders/ro-main/ro-main.component';
import { RoAddComponent } from './modules/order-management/returnOrders/ro-add/ro-add.component';
import { RoListingComponent } from './modules/order-management/returnOrders/ro-listing/ro-listing.component';
import { RoViewComponent } from './modules/order-management/returnOrders/ro-view/ro-view.component';
import { OrderReportsMainComponent } from './modules/order-management/order-reports/order-reports-main/order-reports-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiTemplateComponent } from './ui-components/ui-template/ui-template.component';
import { ProcurementMainComponent } from './modules/Procurement/procurement-main/procurement-main.component';
import { SupplierMainComponent } from './modules/Procurement/supplier/supplier-main/supplier-main.component';
import { SupplierListingComponent } from './modules/Procurement/supplier/supplier-listing/supplier-listing.component';
import { SupplierViewComponent } from './modules/Procurement/supplier/supplier-view/supplier-view.component';
import { SupplierAddComponent } from './modules/Procurement/supplier/supplier-add/supplier-add.component';
import { PoMainComponent } from './modules/Procurement/purchase-order/po-main/po-main.component';
import { PoListingComponent } from './modules/Procurement/purchase-order/po-listing/po-listing.component';
import { PoAddComponent } from './modules/Procurement/purchase-order/po-add/po-add.component';
import { PoViewComponent } from './modules/Procurement/purchase-order/po-view/po-view.component';
import { SReturnMainComponent } from './modules/Procurement/supplier-return/s-return-main/s-return-main.component';
import { SReturnAddComponent } from './modules/Procurement/supplier-return/s-return-add/s-return-add.component';
import { SReturnViewComponent } from './modules/Procurement/supplier-return/s-return-view/s-return-view.component';
import { SReturnListingComponent } from './modules/Procurement/supplier-return/s-return-listing/s-return-listing.component';
import { ProcurementsReportsMainComponent } from './modules/Procurement/procurement-reports/procurements-reports-main/procurements-reports-main.component';
import { LogisticsMainComponent } from './modules/logistics/logistics-main/logistics-main.component';
import { PackagesMainComponent } from './modules/logistics/Packages/packages-main/packages-main.component';
import { PackagesListingComponent } from './modules/logistics/Packages/packages-listing/packages-listing.component';
import { PackagesAddComponent } from './modules/logistics/Packages/packages-add/packages-add.component';
import { PackagesViewComponent } from './modules/logistics/Packages/packages-view/packages-view.component';
import { ShipmentMainComponent } from './modules/logistics/Shipments/shipment-main/shipment-main.component';
import { ShipmentAddComponent } from './modules/logistics/Shipments/shipment-add/shipment-add.component';
import { ShipmentViewComponent } from './modules/logistics/Shipments/shipment-view/shipment-view.component';
import { ShipmentListingComponent } from './modules/logistics/Shipments/shipment-listing/shipment-listing.component';
import { DeliveryMainComponent } from './modules/logistics/DeliveryNote/delivery-main/delivery-main.component';
import { DeliveryAddComponent } from './modules/logistics/DeliveryNote/delivery-add/delivery-add.component';
import { DeliveryViewComponent } from './modules/logistics/DeliveryNote/delivery-view/delivery-view.component';
import { DeliveryListingComponent } from './modules/logistics/DeliveryNote/delivery-listing/delivery-listing.component';
import { CarrierMainComponent } from './modules/logistics/CarrierManagement/carrier-main/carrier-main.component';
import { CarrierAddComponent } from './modules/logistics/CarrierManagement/carrier-add/carrier-add.component';
import { CarrierListingComponent } from './modules/logistics/CarrierManagement/carrier-listing/carrier-listing.component';
import { CarrierViewComponent } from './modules/logistics/CarrierManagement/carrier-view/carrier-view.component';
import { FreightMainComponent } from './modules/logistics/Freightmanagement/freight-main/freight-main.component';
import { FreightViewComponent } from './modules/logistics/Freightmanagement/freight-view/freight-view.component';
import { FreightListingComponent } from './modules/logistics/Freightmanagement/freight-listing/freight-listing.component';
import { FreightAddComponent } from './modules/logistics/Freightmanagement/freight-add/freight-add.component';
import { LogisticsReportsMainComponent } from './modules/logistics/Logistics-Reports/logistics-reports-main/logistics-reports-main.component';
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
import { SoItemsComponent } from './modules/order-management/sales-order/so-items/so-items.component';
import { SoPrintComponent } from './modules/order-management/sales-order/so-print/so-print.component';
import { RoPrintComponent } from './modules/order-management/returnOrders/ro-print/ro-print.component';
import { RoItemsComponent } from './modules/order-management/returnOrders/ro-items/ro-items.component';
import { InvoiceItemsComponent } from './modules/order-management/invoice/invoice-items/invoice-items.component';
import { InvoicePrintComponent } from './modules/order-management/invoice/invoice-print/invoice-print.component';
import { SalesOrderSummaryComponent } from './modules/order-management/order-reports/sales-order-summary/sales-order-summary.component';
import { CustomerOrderHistoryReportComponent } from './modules/order-management/order-reports/customer-order-history-report/customer-order-history-report.component';
import { InvoicePaymentStatusReportComponent } from './modules/order-management/order-reports/invoice-payment-status-report/invoice-payment-status-report.component';
import { OrderFulfillmentReportComponent } from './modules/order-management/order-reports/order-fulfillment-report/order-fulfillment-report.component';
import { ReturnOrderAnalysisReportComponent } from './modules/order-management/order-reports/return-order-analysis-report/return-order-analysis-report.component';
import { CustomerContactsComponent } from './modules/order-management/customers/customer-contacts/customer-contacts.component';
import { CustomerCommentsComponent } from './modules/order-management/customers/customer-comments/customer-comments.component';
import { InvDetailMainComponent } from './modules/Inventory/inventory-details/inv-detail-main/inv-detail-main.component';
import { InvDetailAddComponent } from './modules/Inventory/inventory-details/inv-detail-add/inv-detail-add.component';
import { InvDetailListingComponent } from './modules/Inventory/inventory-details/inv-detail-listing/inv-detail-listing.component';
import { CustomerInvoiceComponent } from './modules/order-management/customers/customer-invoice/customer-invoice.component';
import { CustomerPaymentsComponent } from './modules/order-management/customers/customer-payments/customer-payments.component';
import { CustomerSoComponent } from './modules/order-management/customers/customer-so/customer-so.component';
import { CustomerPackagesComponent } from './modules/order-management/customers/customer-packages/customer-packages.component';
import { CustomerDeliveryComponent } from './modules/order-management/customers/customer-delivery/customer-delivery.component';
import { CustomerCreditNotesComponent } from './modules/order-management/customers/customer-credit-notes/customer-credit-notes.component';
import { InvSummeryComponent } from './modules/Inventory/inventory-reports/inv-summery/inv-summery.component';
import { StockReportSummeryComponent } from './modules/Inventory/inventory-reports/stock-report-summery/stock-report-summery.component';
import { CommittedStockDetailsComponent } from './modules/Inventory/inventory-reports/committed-stock-details/committed-stock-details.component';

import { PackageStatusReportComponent } from './modules/logistics/Logistics-Reports/package-status-report/package-status-report.component';
import { DeliveryNoteSummaryReportComponent } from './modules/logistics/Logistics-Reports/delivery-note-summary-report/delivery-note-summary-report.component';
import { CarrierPerformanceReportComponent } from './modules/logistics/Logistics-Reports/carrier-performance-report/carrier-performance-report.component';
import { InventoryComponent } from './modules/logistics/Logistics-Reports/inventory/inventory.component';
import { PurchaseOrderDetailsComponent } from './modules/Procurement/procurement-reports/purchase-order-details/purchase-order-details.component';
import { PurchaseOrderVendorComponent } from './modules/Procurement/procurement-reports/purchase-order-vendor/purchase-order-vendor.component';
import { PurchaseByItemComponent } from './modules/Procurement/procurement-reports/purchase-by-item/purchase-by-item.component';
import { PurchaseHistoryComponent } from './modules/Procurement/procurement-reports/purchase-history/purchase-history.component';
import { SReturnPrintComponent } from './modules/Procurement/supplier-return/s-return-print/s-return-print.component';
import { SReturnItemsComponent } from './modules/Procurement/supplier-return/s-return-items/s-return-items.component';
import { CreditMemoMainComponent } from './modules/order-management/credit-memo/credit-memo-main/credit-memo-main.component';
import { CreditMemoListingComponent } from './modules/order-management/credit-memo/credit-memo-listing/credit-memo-listing.component';
import { CreditMemoAddComponent } from './modules/order-management/credit-memo/credit-memo-add/credit-memo-add.component';
import { CreditMemoViewComponent } from './modules/order-management/credit-memo/credit-memo-view/credit-memo-view.component';
import { PackageItemsComponent } from './modules/logistics/Packages/package-items/package-items.component';
import { PackagePrintComponent } from './modules/logistics/Packages/package-print/package-print.component';
import { PoPrintComponent } from './modules/Procurement/purchase-order/po-print/po-print.component';
import { BomInvReportComponent } from './modules/Manufacturing/reports/bom-inv-report/bom-inv-report.component';
import { DeliveryPrintComponent } from './modules/logistics/DeliveryNote/delivery-print/delivery-print.component';
import { DeliveryItemsComponent } from './modules/logistics/DeliveryNote/delivery-items/delivery-items.component';
import { CreditMemoPrintComponent } from './modules/order-management/credit-memo/credit-memo-print/credit-memo-print.component';
import { CreditMemoItemsComponent } from './modules/order-management/credit-memo/credit-memo-items/credit-memo-items.component';
import { PaymentsPrintComponent } from './modules/order-management/payments/payments-print/payments-print.component';
import { PaymentsItemsComponent } from './modules/order-management/payments/payments-items/payments-items.component';
import { FreightShippingMethodComponent } from './modules/logistics/Freightmanagement/freight-shipping-method/freight-shipping-method.component';
import { FreightWeightRangeComponent } from './modules/logistics/Freightmanagement/freight-weight-range/freight-weight-range.component';
import { FreightDimensionsComponent } from './modules/logistics/Freightmanagement/freight-dimensions/freight-dimensions.component';
import { FreightCalculationComponent } from './modules/logistics/Freightmanagement/freight-calculation/freight-calculation.component';

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
import { PoItemsComponent } from './modules/Procurement/purchase-order/po-items/po-items.component';
import { DashboardInventoryOveraTimeComponent } from './modules/dashboard/dashboard-inventory-overa-time/dashboard-inventory-overa-time.component';
import { DashboardStockTransferRequestsComponent } from './modules/dashboard/dashboard-stock-transfer-requests/dashboard-stock-transfer-requests.component';
import { ShipmentPrintComponent } from './modules/logistics/Shipments/shipment-print/shipment-print.component';
import { ShipmentItemsComponent } from './modules/logistics/Shipments/shipment-items/shipment-items.component';

import { SupplierPurchaseOrderComponent } from './modules/Procurement/supplier/supplier-purchase-order/supplier-purchase-order.component';
import { SupplierPurchaseReceviesComponent } from './modules/Procurement/supplier/supplier-purchase-recevies/supplier-purchase-recevies.component';
import { SupplierSupplierReturnComponent } from './modules/Procurement/supplier/supplier-supplier-return/supplier-supplier-return.component';
import { DashboardPieShipmentsComponent } from './modules/dashboard/dashboard-pie-shipments/dashboard-pie-shipments.component';

import { ShipmentDeliveryConfirmComponent } from './modules/logistics/Shipments/shipment-delivery-confirm/shipment-delivery-confirm.component';
import { TopCustomersSuppliersComponent } from './modules/dashboard/top-customers-suppliers/top-customers-suppliers.component';

import { QuoteMainComponent } from './modules/order-management/quote/quote-main/quote-main.component';
import { QuoteListingComponent } from './modules/order-management/quote/quote-listing/quote-listing.component';
import { QuoteAddComponent } from './modules/order-management/quote/quote-add/quote-add.component';
import { QuoteViewComponent } from './modules/order-management/quote/quote-view/quote-view.component';
import { QuoteLineitemsComponent } from './modules/order-management/quote/quote-lineitems/quote-lineitems.component';
import { QuotePrintComponent } from './modules/order-management/quote/quote-print/quote-print.component';
import { InvBulkuploadComponent } from './modules/Inventory/inventory-details/inv-bulkupload/inv-bulkupload.component';
import { BookingsMainComponent } from './modules/logistics/Bookings/bookings-main/bookings-main.component';
import { BookingsListingComponent } from './modules/logistics/Bookings/bookings-listing/bookings-listing.component';
import { BookingsAddComponent } from './modules/logistics/Bookings/bookings-add/bookings-add.component';
import { BookingsViewComponent } from './modules/logistics/Bookings/bookings-view/bookings-view.component';
import { BookingsPrintComponent } from './modules/logistics/Bookings/bookings-print/bookings-print.component';
import { BookingItemsComponent } from './modules/logistics/Bookings/booking-items/booking-items.component';
import { FreightRateForKgComponent } from './modules/logistics/Freightmanagement/freight-rate-for-kg/freight-rate-for-kg.component';
import { FreightServiceTaxComponent } from './modules/logistics/Freightmanagement/freight-service-tax/freight-service-tax.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingTrackComponent } from './modules/logistics/Bookings/booking-track/booking-track.component';
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
    OrderMainComponent,
    CustomerMainComponent,
    SoMainComponent,
    CustomerListingComponent,
    CustomerAddComponent,
    CustomerViewComponent,
    SoListingComponent,
    SoAddComponent,
    SoViewComponent,
    InvoiceMainComponent,
    InvoiceListingComponent,
    InvoiceAddComponent,
    InvoiceViewComponent,
    PaymentsListingComponent,
    PaymentsMainComponent,
    PaymentsAddComponent,
    PaymentsViewComponent,
    RoMainComponent,
    RoAddComponent,
    RoListingComponent,
    RoViewComponent,
    OrderReportsMainComponent,
    UiTemplateComponent,
    ProcurementMainComponent,
    SupplierMainComponent,
    SupplierListingComponent,
    SupplierViewComponent,
    SupplierAddComponent,
    PoMainComponent,
    PoListingComponent,
    PoAddComponent,
    PoViewComponent,
    SReturnMainComponent,
    SReturnAddComponent,
    SReturnViewComponent,
    SReturnListingComponent,
    ProcurementsReportsMainComponent,
    LogisticsMainComponent,
    PackagesMainComponent,
    PackagesListingComponent,
    PackagesAddComponent,
    PackagesViewComponent,
    ShipmentMainComponent,
    ShipmentAddComponent,
    ShipmentViewComponent,
    ShipmentListingComponent,
    DeliveryMainComponent,
    DeliveryAddComponent,
    DeliveryViewComponent,
    DeliveryListingComponent,
    CarrierMainComponent,
    CarrierAddComponent,
    CarrierListingComponent,
    CarrierViewComponent,
    FreightMainComponent,
    FreightViewComponent,
    FreightListingComponent,
    FreightAddComponent,
    LogisticsReportsMainComponent,
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
    SoItemsComponent,
    SoPrintComponent,
    RoPrintComponent,
    RoItemsComponent,
    InvoiceItemsComponent,
    InvoicePrintComponent,
    SalesOrderSummaryComponent,
    CustomerOrderHistoryReportComponent,
    InvoicePaymentStatusReportComponent,
    OrderFulfillmentReportComponent,
    ReturnOrderAnalysisReportComponent,
    CustomerContactsComponent,
    CustomerCommentsComponent,
    InvDetailMainComponent,
    InvDetailAddComponent,
    
    CustomerInvoiceComponent,
    CustomerPaymentsComponent,
    CustomerSoComponent,
    CustomerPackagesComponent,
    CustomerDeliveryComponent,
    CustomerCreditNotesComponent,
    InvSummeryComponent,
    StockReportSummeryComponent,
    CommittedStockDetailsComponent,
    
    PackageStatusReportComponent,
    DeliveryNoteSummaryReportComponent,
    CarrierPerformanceReportComponent,
    InventoryComponent,
    PurchaseOrderDetailsComponent,
    PurchaseOrderVendorComponent,
    PurchaseByItemComponent,
    PurchaseHistoryComponent,
    SReturnPrintComponent,
    SReturnItemsComponent,
    CreditMemoMainComponent,
    CreditMemoListingComponent,
    CreditMemoAddComponent,
    InvDetailListingComponent,
    CreditMemoViewComponent,
    PackageItemsComponent,
    PackagePrintComponent,
    PoPrintComponent,
    BomInvReportComponent,
    DeliveryPrintComponent,
    DeliveryItemsComponent,
    CreditMemoPrintComponent,
    CreditMemoItemsComponent,
    PaymentsPrintComponent,
    PaymentsItemsComponent,
    FreightShippingMethodComponent,
    FreightWeightRangeComponent,
    FreightDimensionsComponent,
    FreightCalculationComponent,
    
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
    PoItemsComponent,
    DashboardInventoryOveraTimeComponent,
    DashboardStockTransferRequestsComponent,
    ShipmentPrintComponent,
    ShipmentItemsComponent,
    
    SupplierPurchaseOrderComponent,
    SupplierPurchaseReceviesComponent,
    SupplierSupplierReturnComponent,
    DashboardPieShipmentsComponent,
   
    ShipmentDeliveryConfirmComponent,
    TopCustomersSuppliersComponent,
   
    QuoteMainComponent,
    QuoteListingComponent,
    QuoteAddComponent,
    QuoteViewComponent,
    QuoteLineitemsComponent,
    QuotePrintComponent,
    InvBulkuploadComponent,
    BookingsMainComponent,
    BookingsListingComponent,
    BookingsAddComponent,
    BookingsViewComponent,
    BookingsPrintComponent,
    BookingItemsComponent,
    FreightRateForKgComponent,
    FreightServiceTaxComponent,
    BookingTrackComponent,
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
    CountryStateCityModule
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]

})
export class AppModule { }
