import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseModuleRoutingModule } from './warehouse-module-routing.module';
import { WarehouseModuleComponent } from './warehouse-module.component';
import { AddStockMainComponent } from './add-stock/add-stock-main/add-stock-main.component';
import { StockAdjustmentMainComponent } from './stock-adjustment/stock-adjustment-main/stock-adjustment-main.component';
import { StockAdjustmentListingComponent } from './stock-adjustment/stock-adjustment-listing/stock-adjustment-listing.component';
import { AddWarehouseComponent } from './warehouse-details/add-warehouse/add-warehouse.component';
import { WarehouseViewComponent } from './warehouse-details/warehouse-view/warehouse-view.component';
import { WarehouseListingComponent } from './warehouse-details/warehouse-listing/warehouse-listing.component';
import { WarehouseMainComponent } from './warehouse-details/warehouse-main/warehouse-main.component';
import { StocktransferAddComponent } from './stock-transfer-forms/stocktransfer-add/stocktransfer-add.component';
import { StocktransferViewComponent } from './stock-transfer-forms/stocktransfer-view/stocktransfer-view.component';
import { StocktransferMainComponent } from './stock-transfer-forms/stocktransfer-main/stocktransfer-main.component';
import { StocktransferListingComponent } from './stock-transfer-forms/stocktransfer-listing/stocktransfer-listing.component';


@NgModule({
  declarations: [
    WarehouseModuleComponent,
    AddStockMainComponent,
    StockAdjustmentMainComponent,
    StockAdjustmentListingComponent,
    AddWarehouseComponent,
    WarehouseViewComponent,
    WarehouseListingComponent,
    WarehouseMainComponent,
    StocktransferAddComponent,
    StocktransferViewComponent,
    StocktransferMainComponent,
    StocktransferListingComponent,  ],
  imports: [
    CommonModule,
    WarehouseModuleRoutingModule
  ]
})
export class WarehouseModuleModule { }
