import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingsRoutingModule } from './manufacturings-routing.module';
import { ManufacturingsComponent } from './manufacturings.component';
import { BomsAddComponent } from './BOMS/boms-add/boms-add.component';
import { BomsListingComponent } from './BOMS/boms-listing/boms-listing.component';
import { BomsMainComponent } from './BOMS/boms-main/boms-main.component';
import { BomsViewComponent } from './BOMS/boms-view/boms-view.component';
import { ProductionsAddComponent } from './Productions/productions-add/productions-add.component';
import { ProductionsListingComponent } from './Productions/productions-listing/productions-listing.component';
import { ProductionsMainComponent } from './Productions/productions-main/productions-main.component';
import { ProductionsViewComponent } from './Productions/productions-view/productions-view.component';
import { QcAddsComponent } from './Quality-controls/qc-adds/qc-adds.component';
import { QcListingsComponent } from './Quality-controls/qc-listings/qc-listings.component';
import { QcMainsComponent } from './Quality-controls/qc-mains/qc-mains.component';
import { QcViewsComponent } from './Quality-controls/qc-views/qc-views.component';
import { QcInspectionsComponent } from './Quality-controls/qc-inspections/qc-inspections.component';
import { BomInvReportsComponent } from './Report/bom-inv-reports/bom-inv-reports.component';
import { InspectionResultReportsComponent } from './Report/inspection-result-reports/inspection-result-reports.component';
import { ManufacturingReportMainComponent } from './Report/manufacturing-report-main/manufacturing-report-main.component';
import { ProductionScheduleReportsComponent } from './Report/production-schedule-reports/production-schedule-reports.component';
import { WorkOrderStatusReportsComponent } from './Report/work-order-status-reports/work-order-status-reports.component';
import { WorkOrderAddComponent } from './work-order/work-order-add/work-order-add.component';
import { WorkOrderListingComponent } from './work-order/work-order-listing/work-order-listing.component';
import { WorkOrderMainComponent } from './work-order/work-order-main/work-order-main.component';
import { WorkOrderViewComponent } from './work-order/work-order-view/work-order-view.component';


@NgModule({
  declarations: [
    ManufacturingsComponent,
    BomsAddComponent,
    BomsListingComponent,
    BomsMainComponent,
    BomsViewComponent,
    ProductionsAddComponent,
    ProductionsListingComponent,
    ProductionsMainComponent,
    ProductionsViewComponent,
    QcAddsComponent,
    QcListingsComponent,
    QcMainsComponent,
    QcViewsComponent,
    QcInspectionsComponent,
    BomInvReportsComponent,
    InspectionResultReportsComponent,
    ManufacturingReportMainComponent,
    ProductionScheduleReportsComponent,
    WorkOrderStatusReportsComponent,
    WorkOrderAddComponent,
    WorkOrderListingComponent,
    WorkOrderMainComponent,
    WorkOrderViewComponent,
  ],
  imports: [
    CommonModule,
    ManufacturingsRoutingModule
  ]
})
export class ManufacturingsModule { }

