import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UiTemplateComponent } from './ui-components/ui-template/ui-template.component';

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

import { LoginComponent } from './ui-components/login/login.component';
import { SignupComponent } from './ui-components/signup/signup.component';
import { DashboardMainComponent } from './modules/dashboard/dashboard-main/dashboard-main.component';
import { authGuard } from './services/auth/auth.guard';
import { InvBulkuploadComponent } from './modules/Inventory/inventory-details/inv-bulkupload/inv-bulkupload.component';

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
        path:'order-mangements',
        loadChildren:()=>import('./modules/order-mangements/order-mangements.module').then(m=>m.OrderMangementsModule)
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
  { path: 'order-managements', loadChildren: () => import('./modules/order-mangements/order-mangements.module').then(m => m.OrderMangementsModule) },
  
  
  
  { path: '**', redirectTo: '/scm/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
