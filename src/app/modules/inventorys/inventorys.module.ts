import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventorysRoutingModule } from './inventorys-routing.module';
import { InventorysComponent } from './inventorys.component';
import { InvBulkuploadsComponent } from './inventory-detail/inv-bulkuploads/inv-bulkuploads.component';
import { InvDetailsAddComponent } from './inventory-detail/inv-details-add/inv-details-add.component';
import { InvDetailsListingComponent } from './inventory-detail/inv-details-listing/inv-details-listing.component';
import { InvDetailsMainComponent } from './inventory-detail/inv-details-main/inv-details-main.component';
import { ReplenishmentsListingComponent } from './inventory-replenishments/replenishments-listing/replenishments-listing.component';
import { ReplenishmentsMainComponent } from './inventory-replenishments/replenishments-main/replenishments-main.component';
import { CommittedStocksDetailsComponent } from './inventory-report/committed-stocks-details/committed-stocks-details.component';
import { InvReportMainComponent } from './inventory-report/inv-report-main/inv-report-main.component';
import { InvSummaryComponent } from './inventory-report/inv-summary/inv-summary.component';
import { StockReportSummaryComponent } from './inventory-report/stock-report-summary/stock-report-summary.component';
import { LotsAddComponent } from './lots/lots-add/lots-add.component';
import { LotsListingComponent } from './lots/lots-listing/lots-listing.component';
import { LotsMainComponent } from './lots/lots-main/lots-main.component';
import { StocksListingComponent } from './stock-level/stocks-listing/stocks-listing.component';
import { StocksMainComponent } from './stock-level/stocks-main/stocks-main.component';


@NgModule({
  declarations: [
    InventorysComponent,
    InvBulkuploadsComponent,
    InvDetailsAddComponent,
    InvDetailsListingComponent,
    InvDetailsMainComponent,
    ReplenishmentsListingComponent,
    ReplenishmentsMainComponent,
    CommittedStocksDetailsComponent,
    InvReportMainComponent,
    InvSummaryComponent,
    StockReportSummaryComponent,
    LotsAddComponent,
    LotsListingComponent,
    LotsMainComponent,
    StocksListingComponent,
    StocksMainComponent
  ],
  imports: [
    CommonModule,
    InventorysRoutingModule
  ]
})
export class InventorysModule { }
