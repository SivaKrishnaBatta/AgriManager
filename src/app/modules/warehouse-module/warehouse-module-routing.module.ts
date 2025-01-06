import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseModuleComponent } from './warehouse-module.component';
import { AddStockMainComponent } from './add-stock/add-stock-main/add-stock-main.component';
import { StocktransferMainComponent } from './stock-transfer-forms/stocktransfer-main/stocktransfer-main.component';
import { StocktransferListingComponent } from './stock-transfer-forms/stocktransfer-listing/stocktransfer-listing.component';
import { StocktransferAddComponent } from './stock-transfer-forms/stocktransfer-add/stocktransfer-add.component';
import { StocktransferViewComponent } from './stock-transfer-forms/stocktransfer-view/stocktransfer-view.component';
import { WarehouseMainComponent } from './warehouse-details/warehouse-main/warehouse-main.component';
import { WarehouseListingComponent } from './warehouse-details/warehouse-listing/warehouse-listing.component';
import { AddWarehouseComponent } from './warehouse-details/add-warehouse/add-warehouse.component';
import { WarehouseViewComponent } from './warehouse-details/warehouse-view/warehouse-view.component';
import { StockAdjustmentMainComponent } from './stock-adjustment/stock-adjustment-main/stock-adjustment-main.component';
import { StockAdjustmentListingComponent } from './stock-adjustment/stock-adjustment-listing/stock-adjustment-listing.component';

const routes: Routes = [
  { path: '', component: WarehouseModuleComponent },
  { path: 'add-stock', component: AddStockMainComponent },
  {
    path: 'stock-transfer-forms', component: StocktransferMainComponent,
    children: [
      { path: 'listing', component: StocktransferListingComponent, },
      { path: 'add', component: StocktransferAddComponent },
      { path: 'view', component: StocktransferViewComponent },
      {
        path: '**',
        redirectTo:
          '/scm/warehouse/stock-transfer-forms/listing',
      },
    ],
  },
  {
    path: 'warehouse-details', component: WarehouseMainComponent,
    children: [
      { path: 'listing', component: WarehouseListingComponent, },
      { path: 'add', component: AddWarehouseComponent },
      { path: 'view', component: WarehouseViewComponent },
      {
        path: '**',
        redirectTo:
          '/scm/warehouse/warehouse-details/listing',
      },
    ],
  },
  {
    path: 'stock-adjustment', component: StockAdjustmentMainComponent,
    children: [
      { path: 'listing', component: StockAdjustmentListingComponent, },
      {
        path: '**',
        redirectTo:
          '/scm/warehouse/stock-adjustment/listing',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseModuleRoutingModule { }
