import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomerMainComponent } from './modules/order-management/customers/customer-main/customer-main.component';
import { OrderMainComponent } from './modules/order-management/order-main/order-main.component';
import { SoMainComponent } from './modules/order-management/sales-order/so-main/so-main.component';
import { CustomerListingComponent } from './modules/order-management/customers/customer-listing/customer-listing.component';
import { CustomerAddComponent } from './modules/order-management/customers/customer-add/customer-add.component';
import { SoListingComponent } from './modules/order-management/sales-order/so-listing/so-listing.component';
import { SoAddComponent } from './modules/order-management/sales-order/so-add/so-add.component';
import { SoViewComponent } from './modules/order-management/sales-order/so-view/so-view.component';
import { InvoiceMainComponent } from './modules/order-management/invoice/invoice-main/invoice-main.component';
import { InvoiceListingComponent } from './modules/order-management/invoice/invoice-listing/invoice-listing.component';
import { InvoiceAddComponent } from './modules/order-management/invoice/invoice-add/invoice-add.component';
import { InvoiceViewComponent } from './modules/order-management/invoice/invoice-view/invoice-view.component';
import { PaymentsMainComponent } from './modules/order-management/payments/payments-main/payments-main.component';
import { PaymentsListingComponent } from './modules/order-management/payments/payments-listing/payments-listing.component';
import { PaymentsAddComponent } from './modules/order-management/payments/payments-add/payments-add.component';
import { PaymentsViewComponent } from './modules/order-management/payments/payments-view/payments-view.component';
import { RoMainComponent } from './modules/order-management/returnOrders/ro-main/ro-main.component';
import { RoListingComponent } from './modules/order-management/returnOrders/ro-listing/ro-listing.component';
import { RoAddComponent } from './modules/order-management/returnOrders/ro-add/ro-add.component';
import { RoViewComponent } from './modules/order-management/returnOrders/ro-view/ro-view.component';
import { OrderReportsMainComponent } from './modules/order-management/order-reports/order-reports-main/order-reports-main.component';
import { UiTemplateComponent } from './ui-components/ui-template/ui-template.component';
import { CustomerViewComponent } from './modules/order-management/customers/customer-view/customer-view.component';
import { LogisticsMainComponent } from './modules/logistics/logistics-main/logistics-main.component';
import { PackagesMainComponent } from './modules/logistics/Packages/packages-main/packages-main.component';
import { PackagesListingComponent } from './modules/logistics/Packages/packages-listing/packages-listing.component';
import { PackagesAddComponent } from './modules/logistics/Packages/packages-add/packages-add.component';
import { PackagesViewComponent } from './modules/logistics/Packages/packages-view/packages-view.component';
import { ShipmentMainComponent } from './modules/logistics/Shipments/shipment-main/shipment-main.component';
import { ShipmentListingComponent } from './modules/logistics/Shipments/shipment-listing/shipment-listing.component';
import { ShipmentAddComponent } from './modules/logistics/Shipments/shipment-add/shipment-add.component';
import { ShipmentViewComponent } from './modules/logistics/Shipments/shipment-view/shipment-view.component';
import { DeliveryMainComponent } from './modules/logistics/DeliveryNote/delivery-main/delivery-main.component';
import { DeliveryListingComponent } from './modules/logistics/DeliveryNote/delivery-listing/delivery-listing.component';
import { DeliveryAddComponent } from './modules/logistics/DeliveryNote/delivery-add/delivery-add.component';
import { DeliveryViewComponent } from './modules/logistics/DeliveryNote/delivery-view/delivery-view.component';
import { CarrierMainComponent } from './modules/logistics/CarrierManagement/carrier-main/carrier-main.component';
import { CarrierListingComponent } from './modules/logistics/CarrierManagement/carrier-listing/carrier-listing.component';
import { CarrierAddComponent } from './modules/logistics/CarrierManagement/carrier-add/carrier-add.component';
import { CarrierViewComponent } from './modules/logistics/CarrierManagement/carrier-view/carrier-view.component';
import { FreightMainComponent } from './modules/logistics/Freightmanagement/freight-main/freight-main.component';
import { FreightListingComponent } from './modules/logistics/Freightmanagement/freight-listing/freight-listing.component';
import { FreightAddComponent } from './modules/logistics/Freightmanagement/freight-add/freight-add.component';
import { FreightViewComponent } from './modules/logistics/Freightmanagement/freight-view/freight-view.component';
import { LogisticsReportsMainComponent } from './modules/logistics/Logistics-Reports/logistics-reports-main/logistics-reports-main.component';
import { ManufacturingMainComponent } from './modules/Manufacturing/manufacturing-main/manufacturing-main.component';
import { BomMainComponent } from './modules/Manufacturing/BOM/bom-main/bom-main.component';
import { BomListingComponent } from './modules/Manufacturing/BOM/bom-listing/bom-listing.component';
import { BomAddComponent } from './modules/Manufacturing/BOM/bom-add/bom-add.component';
import { BomViewComponent } from './modules/Manufacturing/BOM/bom-view/bom-view.component';
import { ProductionMainComponent } from './modules/Manufacturing/production/production-main/production-main.component';
import { ProductionListingComponent } from './modules/Manufacturing/production/production-listing/production-listing.component';
import { ProductionAddComponent } from './modules/Manufacturing/production/production-add/production-add.component';
import { ProductionViewComponent } from './modules/Manufacturing/production/production-view/production-view.component';
import { WorkOrdersMainComponent } from './modules/Manufacturing/work-orders/work-orders-main/work-orders-main.component';
import { WorkOrdersListingComponent } from './modules/Manufacturing/work-orders/work-orders-listing/work-orders-listing.component';
import { WorkOrdersAddComponent } from './modules/Manufacturing/work-orders/work-orders-add/work-orders-add.component';
import { WorkOrdersViewComponent } from './modules/Manufacturing/work-orders/work-orders-view/work-orders-view.component';
import { QcMainComponent } from './modules/Manufacturing/Quality-control/qc-main/qc-main.component';
import { QcListingComponent } from './modules/Manufacturing/Quality-control/qc-listing/qc-listing.component';
import { QcAddComponent } from './modules/Manufacturing/Quality-control/qc-add/qc-add.component';
import { QcViewComponent } from './modules/Manufacturing/Quality-control/qc-view/qc-view.component';
import { ManufacturingReportsMainComponent } from './modules/Manufacturing/reports/manufacturing-reports-main/manufacturing-reports-main.component';
import { StockMainComponent } from './modules/Inventory/stock-levels/stock-main/stock-main.component';
import { StockListingComponent } from './modules/Inventory/stock-levels/stock-listing/stock-listing.component';
import { ReplenishmentMainComponent } from './modules/Inventory/inventory-replenishment/replenishment-main/replenishment-main.component';
import { ReplenishmentListingComponent } from './modules/Inventory/inventory-replenishment/replenishment-listing/replenishment-listing.component';
import { LotMainComponent } from './modules/Inventory/lot/lot-main/lot-main.component';
import { LotListingComponent } from './modules/Inventory/lot/lot-listing/lot-listing.component';
import { LotAddComponent } from './modules/Inventory/lot/lot-add/lot-add.component';
import { InvReportsMainComponent } from './modules/Inventory/inventory-reports/inv-reports-main/inv-reports-main.component';
import { InventoryMainComponent } from './modules/Inventory/inventory-main/inventory-main.component';
import { InvDetailMainComponent } from './modules/Inventory/inventory-details/inv-detail-main/inv-detail-main.component';
import { InvDetailListingComponent } from './modules/Inventory/inventory-details/inv-detail-listing/inv-detail-listing.component';
import { InvDetailAddComponent } from './modules/Inventory/inventory-details/inv-detail-add/inv-detail-add.component';

import { CreditMemoMainComponent } from './modules/order-management/credit-memo/credit-memo-main/credit-memo-main.component';
import { CreditMemoListingComponent } from './modules/order-management/credit-memo/credit-memo-listing/credit-memo-listing.component';
import { CreditMemoAddComponent } from './modules/order-management/credit-memo/credit-memo-add/credit-memo-add.component';
import { CreditMemoViewComponent } from './modules/order-management/credit-memo/credit-memo-view/credit-memo-view.component';
import { LoginComponent } from './ui-components/login/login.component';
import { SignupComponent } from './ui-components/signup/signup.component';
import { FreightCalculationComponent } from './modules/logistics/Freightmanagement/freight-calculation/freight-calculation.component';
import { DashboardMainComponent } from './modules/dashboard/dashboard-main/dashboard-main.component';
import { authGuard } from './services/auth/auth.guard';
import { QuoteMainComponent } from './modules/order-management/quote/quote-main/quote-main.component';
import { QuoteListingComponent } from './modules/order-management/quote/quote-listing/quote-listing.component';
import { QuoteAddComponent } from './modules/order-management/quote/quote-add/quote-add.component';
import { QuoteViewComponent } from './modules/order-management/quote/quote-view/quote-view.component';
import { InvBulkuploadComponent } from './modules/Inventory/inventory-details/inv-bulkupload/inv-bulkupload.component';
import { BookingsMainComponent } from './modules/logistics/Bookings/bookings-main/bookings-main.component';
import { BookingsListingComponent } from './modules/logistics/Bookings/bookings-listing/bookings-listing.component';
import { BookingsAddComponent } from './modules/logistics/Bookings/bookings-add/bookings-add.component';
import { BookingsViewComponent } from './modules/logistics/Bookings/bookings-view/bookings-view.component';
import { Page404Component } from './ui-components/page-404/page-404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: '404', component: Page404Component },
  {
    path: 'scm',
    component: MainComponent, canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardMainComponent },
      {
        path:'warehouse',
        loadChildren:()=>import('./modules/warehouse-module/warehouse-module.module').then(m=>m.WarehouseModuleModule)
      },
      {
        path:'settings',
        loadChildren:()=>import('./modules/settings-profile/settings-profile.module').then(m=>m.SettingsProfileModule)
      },   
      {
        path:'logistic',
        loadChildren:()=>import('./modules/logistic/logistic.module').then(m=>m.LogisticModule)
      },   
      {
        path:'procurements',
        loadChildren:()=>import('./modules/procurements/procurements.module').then(m=>m.ProcurementsModule)
      },
      {
        path:'inventorys',
        loadChildren:()=>import('./modules/inventorys/inventorys.module').then(m=>m.InventorysModule)
      },    
      {
        path: 'order',
        component: OrderMainComponent,
        children: [
          {
            path: 'customers',
            component: CustomerMainComponent,
            children: [
              { path: 'listing', component: CustomerListingComponent },
              { path: 'add-customer', component: CustomerAddComponent },
              { path: 'customer-view', component: CustomerViewComponent },
              { path: '**', redirectTo: '/scm/order/customers/listing' },
            ],
          },
          {
            path: 'quote',
            component: QuoteMainComponent,
            children: [
              { path: 'listing', component: QuoteListingComponent },
              { path: 'add', component: QuoteAddComponent },
              { path: 'view', component: QuoteViewComponent },
              { path: '**', redirectTo: '/scm/order/quote/listing' },
            ],
          },
          {
            path: 'sale-order',
            component: SoMainComponent,
            children: [
              { path: 'listing', component: SoListingComponent },
              { path: 'add-so', component: SoAddComponent },
              { path: 'so-view', component: SoViewComponent },
              { path: '**', redirectTo: '/scm/order/sale-order/listing' },
            ],
          },
          {
            path: 'invoice',
            component: InvoiceMainComponent,
            children: [
              { path: 'listing', component: InvoiceListingComponent },
              { path: 'add-invoice', component: InvoiceAddComponent },
              { path: 'invoice-view', component: InvoiceViewComponent },
              { path: '**', redirectTo: '/scm/order/invoice/listing' },
            ],
          },
          {
            path: 'payments',
            component: PaymentsMainComponent,
            children: [
              { path: 'listing', component: PaymentsListingComponent },
              { path: 'add-payments', component: PaymentsAddComponent },
              { path: 'payments-view', component: PaymentsViewComponent },
              { path: '**', redirectTo: '/scm/order/payments/listing' },
            ],
          },
          {
            path: 'rma',
            component: RoMainComponent,
            children: [
              { path: 'listing', component: RoListingComponent },
              { path: 'add-rma', component: RoAddComponent },
              { path: 'rma-view', component: RoViewComponent },
              { path: '**', redirectTo: '/scm/order/rma/listing' },
            ],
          },
          {
            path: 'credit-memo',
            component: CreditMemoMainComponent,
            children: [
              { path: 'listing', component: CreditMemoListingComponent },
              { path: 'credit-memo-add', component: CreditMemoAddComponent },
              { path: 'credit-memo-view', component: CreditMemoViewComponent },
              { path: '**', redirectTo: '/scm/order/credit-memo/listing' },
            ],
          },
          {
            path: 'order-reports',
            component: OrderReportsMainComponent,
          },
          { path: '**', redirectTo: '/scm/order/customers' },
        ],
      },
      {
        path: 'logistics',
        component: LogisticsMainComponent,
        children: [
          {
            path: 'cargos',
            component: BookingsMainComponent,
            children: [
              { path: 'listing', component: BookingsListingComponent },
              { path: 'add', component: BookingsAddComponent },
              { path: 'view/:id', component: BookingsViewComponent },
              { path: '**', redirectTo: '/scm/logistics/cargos/listing' },
            ],
          },
          {
            path: 'package',
            component: PackagesMainComponent,
            children: [
              { path: 'listing', component: PackagesListingComponent },
              { path: 'add-package', component: PackagesAddComponent },
              { path: 'package-view', component: PackagesViewComponent },
              { path: '**', redirectTo: '/scm/logistics/package/listing' },
            ],
          },
          {
            path: 'shipment',
            component: ShipmentMainComponent,
            children: [
              { path: 'listing', component: ShipmentListingComponent },
              { path: 'add-shipment', component: ShipmentAddComponent },
              { path: 'shipment-view', component: ShipmentViewComponent },
              { path: '**', redirectTo: '/scm/logistics/shipment/listing' },
            ],
          },
          {
            path: 'delivery',
            component: DeliveryMainComponent,
            children: [
              { path: 'listing', component: DeliveryListingComponent },
              { path: 'add-delivery', component: DeliveryAddComponent },
              { path: 'delivery-view', component: DeliveryViewComponent },
              { path: '**', redirectTo: '/scm/logistics/delivery/listing' },
            ],
          },
          {
            path: 'carrier',
            component: CarrierMainComponent,
            children: [
              { path: 'listing', component: CarrierListingComponent },
              { path: 'add-carrier', component: CarrierAddComponent },
              { path: 'carrier-view/:id', component: CarrierViewComponent },
              { path: '**', redirectTo: '/scm/logistics/carrier/listing' },
            ],
          },
          {
            path: 'freight',
            component: FreightMainComponent,
            children: [
              { path: 'listing', component: FreightListingComponent },
              { path: 'add-freight', component: FreightAddComponent },
              { path: 'calculation', component: FreightCalculationComponent },
              { path: 'freight-view', component: FreightViewComponent },
              { path: '**', redirectTo: '/scm/logistics/freight/listing' },
            ],
          },
          {
            path: 'reports',
            component: LogisticsReportsMainComponent,
          },
        ],
      },
      {
        path: 'manufacturing',
        component: ManufacturingMainComponent,
        children: [
          {
            path: 'bom',
            component: BomMainComponent,
            children: [
              { path: 'listing', component: BomListingComponent },
              { path: 'add-bom', component: BomAddComponent },
              { path: 'bom-view', component: BomViewComponent },
              { path: '**', redirectTo: '/scm/manufacturing/bom/listing' },
            ],
          },
          {
            path: 'production',
            component: ProductionMainComponent,
            children: [
              { path: 'listing', component: ProductionListingComponent },
              { path: 'add-production', component: ProductionAddComponent },
              { path: 'production-view', component: ProductionViewComponent },
              {
                path: '**',
                redirectTo: '/scm/manufacturing/production/listing',
              },
            ],
          },
          {
            path: 'work-order',
            component: WorkOrdersMainComponent,
            children: [
              { path: 'listing', component: WorkOrdersListingComponent },
              { path: 'add-work-order', component: WorkOrdersAddComponent },
              { path: 'work-order-view', component: WorkOrdersViewComponent },
              {
                path: '**',
                redirectTo: '/scm/manufacturing/work-order/listing',
              },
            ],
          },
          {
            path: 'qc',
            component: QcMainComponent,
            children: [
              { path: 'listing', component: QcListingComponent },
              { path: 'add-qc', component: QcAddComponent },
              { path: 'qc-view', component: QcViewComponent },
              { path: '**', redirectTo: '/scm/manufacturing/qc/listing' },
            ],
          },
          {
            path: 'reports',
            component: ManufacturingReportsMainComponent,
          },
          { path: '**', redirectTo: '/scm/manufacturing/bom' },
        ],
      },
      {
        path: 'inventory',
        component: InventoryMainComponent,
        children: [
          {
            path: 'stock',
            component: StockMainComponent,
            children: [
              { path: 'listing', component: StockListingComponent },
              { path: '**', redirectTo: '/scm/inventory/stock/listing' },
            ],
          },
          {
            path: 'detail',
            component: InvDetailMainComponent,
            children: [
              { path: 'listing', component: InvDetailListingComponent },
              { path: 'add-inventory', component: InvDetailAddComponent },
              { path: 'bulk-upload', component: InvBulkuploadComponent },
              { path: '**', redirectTo: '/scm/inventory/detail/listing' },
            ],
          },
          {
            path: 'replenishment',
            component: ReplenishmentMainComponent,
            children: [
              { path: 'listing', component: ReplenishmentListingComponent },
              {
                path: '**',
                redirectTo: '/scm/inventory/replenishment/listing',
              },
            ],
          },
          {
            path: 'lot',
            component: LotMainComponent,
            children: [
              { path: 'listing', component: LotListingComponent },
              { path: 'add-lot', component: LotAddComponent },
              { path: '**', redirectTo: '/scm/inventory/lot/listing' },
            ],
          },
          {
            path: 'reports',
            component: InvReportsMainComponent,
          },
          { path: '**', redirectTo: '/scm/inventory/inventory' },
        ],
      },


      { path: '**', redirectTo: '/scm/dashboard' },
    ],
  },
  { path: '17/mock-template', component: UiTemplateComponent },
  { path: 'products', loadChildren: () => import('./modules/settings-profile/settings-profile.module').then(m => m.SettingsProfileModule) },
  { path: 'logistic', loadChildren: () => import('./modules/logistic/logistic.module').then(m => m.LogisticModule) },
  { path: '**', redirectTo: '/scm/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
