import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementsRoutingModule } from './procurements-routing.module';
import { ProcurementsComponent } from './procurements.component';

import { PurchaseByItemsComponent } from './Procurements-reports/purchase-by-items/purchase-by-items.component';
import { PurchasesHistoryComponent } from './Procurements-reports/purchases-history/purchases-history.component';
import { PurchaseOrdersDeatilsComponent } from './Procurements-reports/purchase-orders-deatils/purchase-orders-deatils.component';
import { PurchaseOrdersVendorComponent } from './Procurements-reports/purchase-orders-vendor/purchase-orders-vendor.component';
import { ProcurementsReportMainComponent } from './Procurements-reports/procurements-report-main/procurements-report-main.component';
import { PoAddsComponent } from './purchase-orders/po-adds/po-adds.component';
import { PoItemComponent } from './purchase-orders/po-item/po-item.component';
import { PoListingsComponent } from './purchase-orders/po-listings/po-listings.component';
import { ProMainComponent } from './purchase-orders/pro-main/pro-main.component';
import { PoPrintsComponent } from './purchase-orders/po-prints/po-prints.component';
import { PoViewsComponent } from './purchase-orders/po-views/po-views.component';
import { SuppliersAddComponent } from './suppliers/suppliers-add/suppliers-add.component';
import { SuppliersListingComponent } from './suppliers/suppliers-listing/suppliers-listing.component';
import { SuppliersMainComponent } from './suppliers/suppliers-main/suppliers-main.component';
import { SuppliersPurchaseOrderComponent } from './suppliers/suppliers-purchase-order/suppliers-purchase-order.component';
import { SuppliersPurchaseReceivesComponent } from './suppliers/suppliers-purchase-receives/suppliers-purchase-receives.component';
import { SuppliersSupplierReturnComponent } from './suppliers/suppliers-supplier-return/suppliers-supplier-return.component';
import { SuppliersViewComponent } from './suppliers/suppliers-view/suppliers-view.component';
import { SReturnsAddComponent } from './suppliers-return/s-returns-add/s-returns-add.component';
import { SReturnsItemsComponent } from './suppliers-return/s-returns-items/s-returns-items.component';
import { SReturnsListingComponent } from './suppliers-return/s-returns-listing/s-returns-listing.component';
import { SReturnsMainComponent } from './suppliers-return/s-returns-main/s-returns-main.component';
import { SReturnsPrintComponent } from './suppliers-return/s-returns-print/s-returns-print.component';
import { SReturnsViewComponent } from './suppliers-return/s-returns-view/s-returns-view.component';


@NgModule({
  declarations: [
    ProcurementsComponent,
    PurchaseByItemsComponent,
    PurchasesHistoryComponent,
    PurchaseOrdersDeatilsComponent,
    PurchaseOrdersVendorComponent,
    ProcurementsReportMainComponent,
    PoAddsComponent,
    PoItemComponent,
    PoListingsComponent,
    ProMainComponent,
    PoPrintsComponent,
    PoViewsComponent,
    SuppliersAddComponent,
    SuppliersListingComponent,
    SuppliersMainComponent,
    SuppliersPurchaseOrderComponent,
    SuppliersPurchaseReceivesComponent,
    SuppliersSupplierReturnComponent,
    SuppliersViewComponent,
    SReturnsAddComponent,
    SReturnsItemsComponent,
    SReturnsListingComponent,
    SReturnsMainComponent,
    SReturnsPrintComponent,
    SReturnsViewComponent,
  ],
  imports: [
    CommonModule,
    ProcurementsRoutingModule
  ]
})
export class ProcurementsModule { }
