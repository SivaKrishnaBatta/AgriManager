import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcurementsComponent } from './procurements.component';
import { ProcurementsReportMainComponent } from './Procurements-reports/procurements-report-main/procurements-report-main.component';
import { PurchaseByItemsComponent } from './Procurements-reports/purchase-by-items/purchase-by-items.component';
import { PurchaseOrdersDeatilsComponent } from './Procurements-reports/purchase-orders-deatils/purchase-orders-deatils.component';
import { PurchaseOrdersVendorComponent } from './Procurements-reports/purchase-orders-vendor/purchase-orders-vendor.component';
import { PurchasesHistoryComponent } from './Procurements-reports/purchases-history/purchases-history.component';
import { ProMainComponent } from './purchase-orders/pro-main/pro-main.component';
import { PoAddsComponent } from './purchase-orders/po-adds/po-adds.component';
import { PoItemComponent } from './purchase-orders/po-item/po-item.component';
import { PoPrintsComponent } from './purchase-orders/po-prints/po-prints.component';
import { PoViewsComponent } from './purchase-orders/po-views/po-views.component';
import { PoListingsComponent } from './purchase-orders/po-listings/po-listings.component';
import { SuppliersMainComponent } from './suppliers/suppliers-main/suppliers-main.component';
import { SuppliersAddComponent } from './suppliers/suppliers-add/suppliers-add.component';
import { SuppliersListingComponent } from './suppliers/suppliers-listing/suppliers-listing.component';
import { SuppliersPurchaseOrderComponent } from './suppliers/suppliers-purchase-order/suppliers-purchase-order.component';
import { SuppliersPurchaseReceivesComponent } from './suppliers/suppliers-purchase-receives/suppliers-purchase-receives.component';
import { SuppliersSupplierReturnComponent } from './suppliers/suppliers-supplier-return/suppliers-supplier-return.component';
import { SuppliersViewComponent } from './suppliers/suppliers-view/suppliers-view.component';
import { SReturnsMainComponent } from './suppliers-return/s-returns-main/s-returns-main.component';
import { SReturnsAddComponent } from './suppliers-return/s-returns-add/s-returns-add.component';
import { SReturnsItemsComponent } from './suppliers-return/s-returns-items/s-returns-items.component';
import { SReturnsListingComponent } from './suppliers-return/s-returns-listing/s-returns-listing.component';
import { SReturnsViewComponent } from './suppliers-return/s-returns-view/s-returns-view.component';
import { SReturnsPrintComponent } from './suppliers-return/s-returns-print/s-returns-print.component';

const routes: Routes = [
  { path: '', component: ProcurementsComponent },
  { path: 'procurements-reports', component: ProcurementsReportMainComponent ,
  
    children:[
      {path:'purchase-by-items', component: PurchaseByItemsComponent},
      {path:'purchase-orders-details', component: PurchaseOrdersDeatilsComponent},
      {path:'purchase-orders-vendor', component: PurchaseOrdersVendorComponent},
      {path:'purchases-history', component:PurchasesHistoryComponent},
      // {
      //   path:'**',
      //   redirectTo:'/scm/procurements/procurements-reports'
      // },
    ]
  },
  {
    path:'purchase-orders', component: ProMainComponent,
    children:[
     {path:'po-adds', component:PoAddsComponent},
     {path:'po-item', component:PoItemComponent},
     {path:'po-prints', component:PoPrintsComponent},
     {path:'po-listings', component:PoListingsComponent},
     {path:'po-views', component:PoViewsComponent},
    //  {
    //   path:'**',
    //   redirectTo:''
    //  },
    ]
  },


  {
    path:'suppliers', component: SuppliersMainComponent,
    children:[
      {path:'suppliers-add', component:SuppliersAddComponent},
      {path:'suppliers-listing', component:SuppliersListingComponent},
      {path:'purchase-order', component:SuppliersPurchaseOrderComponent},
      {path:'purchase-receives', component:SuppliersPurchaseReceivesComponent},
      {path:'supplier-return', component:SuppliersSupplierReturnComponent},
      {path:'suppliers-view', component:SuppliersViewComponent},
      // {
      //   path:'',
      //   redirectTo:'/scm/procurements/suppliers/suppliers-listing'
      // },
    ]
  },


  {
    path:'suppliers-return', component: SReturnsMainComponent,
    children:[
      {path:'return-add', component: SReturnsAddComponent},
      {path:'return-items', component:SReturnsItemsComponent},
      {path:'returns-listing', component: SReturnsListingComponent},
      {path:'returns-print', component: SReturnsPrintComponent},
      {path:'returns-view', component:SReturnsViewComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementsRoutingModule { }
