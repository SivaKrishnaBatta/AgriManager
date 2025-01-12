import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturingsComponent } from './manufacturings.component';
import { BomsMainComponent } from './BOMS/boms-main/boms-main.component';
import { BomsAddComponent } from './BOMS/boms-add/boms-add.component';
import { BomsViewComponent } from './BOMS/boms-view/boms-view.component';
import { BomsListingComponent } from './BOMS/boms-listing/boms-listing.component';
import { ProductionsMainComponent } from './Productions/productions-main/productions-main.component';
import { ProductionsAddComponent } from './Productions/productions-add/productions-add.component';
import { ProductionsListingComponent } from './Productions/productions-listing/productions-listing.component';
import { ProductionsViewComponent } from './Productions/productions-view/productions-view.component';
import { QcMainsComponent } from './Quality-controls/qc-mains/qc-mains.component';
import { QcAddsComponent } from './Quality-controls/qc-adds/qc-adds.component';
import { QcListingsComponent } from './Quality-controls/qc-listings/qc-listings.component';
import { QcInspectionsComponent } from './Quality-controls/qc-inspections/qc-inspections.component';
import { QcViewsComponent } from './Quality-controls/qc-views/qc-views.component';
import { ManufacturingReportMainComponent } from './Report/manufacturing-report-main/manufacturing-report-main.component';
import { BomInvReportsComponent } from './Report/bom-inv-reports/bom-inv-reports.component';
import { InspectionResultReportsComponent } from './Report/inspection-result-reports/inspection-result-reports.component';
import { ProductionScheduleReportsComponent } from './Report/production-schedule-reports/production-schedule-reports.component';
import { WorkOrderStatusReportsComponent } from './Report/work-order-status-reports/work-order-status-reports.component';
import { WorkOrderMainComponent } from './work-order/work-order-main/work-order-main.component';
import { WorkOrderAddComponent } from './work-order/work-order-add/work-order-add.component';
import { WorkOrderListingComponent } from './work-order/work-order-listing/work-order-listing.component';
import { WorkOrderViewComponent } from './work-order/work-order-view/work-order-view.component';

const routes: Routes = [
  { path: '', component: ManufacturingsComponent },
  {path:'boms', component:BomsMainComponent,
    children:[
      {path:'boms-add', component:BomsAddComponent},
      {path:'boms-listing', component:BomsListingComponent},
      {path:'boms-view', component:BomsViewComponent},
      {
        path:'**',
        redirectTo:'scm/manufacturings/boms/boms-listing'
      }
    ]
  },
  {
    path:'productions', component: ProductionsMainComponent,
    children:[
      {path:'prod-add', component:ProductionsAddComponent},
      {path:'prod-listing', component:ProductionsListingComponent},
      {path:'prod-view', component:ProductionsViewComponent},
      {
        path:'**',
        redirectTo:'scm/manufacturings/productions/prod-listing'
      }
    ]
  },
  {
    path:'quality', component:QcMainsComponent,
    children:[
      {path:'qc-adds', component:QcAddsComponent},
      {path:'qc-listings', component:QcListingsComponent},
      {path:'qc-inspections', component:QcInspectionsComponent},
      {path:'qc-views', component:QcViewsComponent},
      {
        path:'**',
        redirectTo:'scm/manufacturings/quality/qc-listings'
      }
    ]
  },
  {
    path:'report', component:ManufacturingReportMainComponent,
    children:[
      {path:'inv-reports', component:BomInvReportsComponent},
      {path:'result-reports', component:InspectionResultReportsComponent},
      {path:'schedule-reports', component:ProductionScheduleReportsComponent},
      {path:'status-reports', component:WorkOrderStatusReportsComponent},
      // {
      //   path:'**',
      //   redirectTo:'scm/manufacturings/report/inv-reports'
      // }
    ]
  },
  {
    path:'work-order', component:WorkOrderMainComponent,
    children:[
      {path:'order-add', component:WorkOrderAddComponent},
      {path:'order-listing', component:WorkOrderListingComponent},
      {path:'order-view', component:WorkOrderViewComponent},
      {
        path:'**',
        redirectTo:'scm/manufacturings/work-order/order-listing'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingsRoutingModule { }
