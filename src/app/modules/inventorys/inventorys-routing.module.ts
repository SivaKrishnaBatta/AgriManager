import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorysComponent } from './inventorys.component';
import { InvDetailsMainComponent } from './inventory-detail/inv-details-main/inv-details-main.component';
import { InvBulkuploadsComponent } from './inventory-detail/inv-bulkuploads/inv-bulkuploads.component';
import { InvDetailsAddComponent } from './inventory-detail/inv-details-add/inv-details-add.component';
import { InvDetailsListingComponent } from './inventory-detail/inv-details-listing/inv-details-listing.component';
import { ReplenishmentsMainComponent } from './inventory-replenishments/replenishments-main/replenishments-main.component';
import { ReplenishmentsListingComponent } from './inventory-replenishments/replenishments-listing/replenishments-listing.component';
import { InvReportMainComponent } from './inventory-report/inv-report-main/inv-report-main.component';
import { CommittedStocksDetailsComponent } from './inventory-report/committed-stocks-details/committed-stocks-details.component';
import { InvSummaryComponent } from './inventory-report/inv-summary/inv-summary.component';
import { StockReportSummaryComponent } from './inventory-report/stock-report-summary/stock-report-summary.component';
import { LotsMainComponent } from './lots/lots-main/lots-main.component';
import { LotsAddComponent } from './lots/lots-add/lots-add.component';
import { LotsListingComponent } from './lots/lots-listing/lots-listing.component';
import { StocksMainComponent } from './stock-level/stocks-main/stocks-main.component';
import { StocksListingComponent } from './stock-level/stocks-listing/stocks-listing.component';

const routes: Routes = [
  { path: '', component: InventorysComponent },
  {path:'inventory-details', component: InvDetailsMainComponent,
    children:[
      {path:'bulkuploads', component:InvBulkuploadsComponent},
      {path:'details-add', component:InvDetailsAddComponent},
      {path:'details-listing', component:InvDetailsListingComponent},
      {
        path:'**',
        redirectTo:'scm/inventorys/inventory-details/details-listing'
      },
    ]
  },
  {
    path:'replenishments', component: ReplenishmentsMainComponent,
    children:[
      {path:'listing', component:ReplenishmentsListingComponent},
      {path:'**',
       redirectTo:'scm/inventorys/replenishments/listing'
      },
    ]
  },
  {
    path:'inventory-report', component: InvReportMainComponent,
    children:[
      {path:'stocks-details', component: CommittedStocksDetailsComponent},
      {path:'summary', component: InvSummaryComponent},
      {path:'report-summary', component: StockReportSummaryComponent},
      {
        path:'**',
        redirectTo:'scm/inventorys/stock-level/stocks-listing'
      }
    ]
  },
  {
    path:'lots', component: LotsMainComponent,
    children:[
      {path:'lots-add', component:LotsAddComponent},
      {path:'lots-listing', component:LotsListingComponent},
      {
        path:'**',
        redirectTo:'scm/inventorys/lots/lots-listing'
      }
    ]
  },
  {
    path:'stock-level', component: StocksMainComponent,
    children:[
      {path:'stocks-listing', component:StocksListingComponent},
      {
        path:'**',
        redirectTo:'scm/inventorys/stock-level/stocks-listing'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventorysRoutingModule { }
