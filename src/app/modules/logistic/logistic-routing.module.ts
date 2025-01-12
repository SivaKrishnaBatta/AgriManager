import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogisticComponent } from './logistic.component';
import { BookMainComponent } from './Booking/book-main/book-main.component';
import { BookAddComponent } from './Booking/book-add/book-add.component';
import { BookItemsComponent } from './Booking/book-items/book-items.component';
import { BookListingComponent } from './Booking/book-listing/book-listing.component';
import { BookPrintComponent } from './Booking/book-print/book-print.component';
import { BookTrackComponent } from './Booking/book-track/book-track.component';
import { BookViewComponent } from './Booking/book-view/book-view.component';
import { MainCarrierComponent } from './carrier-management/main-carrier/main-carrier.component';
import { AddCarrierComponent } from './carrier-management/add-carrier/add-carrier.component';
import { ListingCarrierComponent } from './carrier-management/listing-carrier/listing-carrier.component';
import { ViewCarrierComponent } from './carrier-management/view-carrier/view-carrier.component';
import { MainDeliveryComponent } from './delivery-note/main-delivery/main-delivery.component';
import { AddDeliverComponent } from './delivery-note/add-deliver/add-deliver.component';
import { ItemsDeliveryComponent } from './delivery-note/items-delivery/items-delivery.component';
import { ListingDeliveryComponent } from './delivery-note/listing-delivery/listing-delivery.component';
import { PrintDeliveryComponent } from './delivery-note/print-delivery/print-delivery.component';
import { ViewDeliveryComponent } from './delivery-note/view-delivery/view-delivery.component';
import { MainFreightComponent } from './freight-management/main-freight/main-freight.component';
import { AddFreightComponent } from './freight-management/add-freight/add-freight.component';
import { CalculationFreightComponent } from './freight-management/calculation-freight/calculation-freight.component';
import { DimensionsFreightComponent } from './freight-management/dimensions-freight/dimensions-freight.component';
import { ListingFreightComponent } from './freight-management/listing-freight/listing-freight.component';
import { RateFreightComponent } from './freight-management/rate-freight/rate-freight.component';
import { ServiceTaxFreightComponent } from './freight-management/service-tax-freight/service-tax-freight.component';
import { ShippingMethodFreightComponent } from './freight-management/shipping-method-freight/shipping-method-freight.component';
import { ViewFreightComponent } from './freight-management/view-freight/view-freight.component';
import { WeightRangeFreightComponent } from './freight-management/weight-range-freight/weight-range-freight.component';
import { LogisticReportMainComponent } from './logistic-report/logistic-report-main/logistic-report-main.component';
import { CarrierPerformanceReportComponent } from './logistic-report/carrier-performance-report/carrier-performance-report.component';
import { DeliverysNoteReportComponent } from './logistic-report/deliverys-note-report/deliverys-note-report.component';
import { InventroysComponent } from './logistic-report/inventroys/inventroys.component';
import { PackagesStatusReportComponent } from './logistic-report/packages-status-report/packages-status-report.component';
import { PackageMainComponent } from './package/package-main/package-main.component';
import { PackageAddComponent } from './package/package-add/package-add.component';
import { PackageListingComponent } from './package/package-listing/package-listing.component';
import { PackageViewComponent } from './package/package-view/package-view.component';
import { PackagesItemComponent } from './package/packages-item/packages-item.component';
import { PackagesPrintComponent } from './package/packages-print/packages-print.component';
import { ShipmentsMainComponent } from './shipment/shipments-main/shipments-main.component';
import { ShipmentsAddComponent } from './shipment/shipments-add/shipments-add.component';
import { ShipmentsDeliveryConfirmComponent } from './shipment/shipments-delivery-confirm/shipments-delivery-confirm.component';
import { ShipmentsListingComponent } from './shipment/shipments-listing/shipments-listing.component';
import { ShipmentsItemComponent } from './shipment/shipments-item/shipments-item.component';
import { ShipmentsPrintComponent } from './shipment/shipments-print/shipments-print.component';
import { ShipmentsViewComponent } from './shipment/shipments-view/shipments-view.component';

const routes: Routes = [
  { path: '', component: LogisticComponent },
  {
      path: 'Booking', component: BookMainComponent,
      children: [
        { path: 'add', component: BookAddComponent },
        { path: 'items', component: BookItemsComponent },
        { path: 'listing', component: BookListingComponent},
        { path: 'print', component: BookPrintComponent },
        { path: 'track', component: BookTrackComponent},
        { path: 'view', component: BookViewComponent },
        // {
        //   path: '**',
        //   redirectTo:
        //     '/scm/logistic/listing',
        // },
        
      ]
    },
    {
      path: 'carrier-mangement', component: MainCarrierComponent,
      children: [
        { path: 'add', component: AddCarrierComponent },
        
        { path: 'listing', component: ListingCarrierComponent},

        { path: 'view/:id', component: ViewCarrierComponent },
        {
          path: '**',
          redirectTo:
            '/scm/logistic/carrier-mangement/listing',
        },
        
      ]
    },
    {
      path: 'delivery-note', component: MainDeliveryComponent,
      children: [
        { path: 'add', component: AddDeliverComponent },
        { path: 'items', component: ItemsDeliveryComponent },
        { path: 'listing', component: ListingDeliveryComponent},
        { path: 'print', component: PrintDeliveryComponent },
        
        { path: 'view', component: ViewDeliveryComponent },
        {
          path: '**',
          redirectTo:
            '/scm/logistic/delivery-note/listing',
        },
        
      ]
    },
    {
      path: 'freight-management', component: MainFreightComponent,
      children: [
        { path: 'add', component: AddFreightComponent },
        { path: 'calculation', component: CalculationFreightComponent },
        { path: 'dimensions', component: DimensionsFreightComponent},
        { path: 'listing', component: ListingFreightComponent },
        { path: 'rate', component: RateFreightComponent},
        { path: 'service-tax', component: ServiceTaxFreightComponent },
        
        { path: 'Shipping', component: ShippingMethodFreightComponent },
        { path: 'view', component: ViewFreightComponent},
        { path: 'weight', component: WeightRangeFreightComponent },
        {
          path: '**',
          redirectTo:
            '/scm/logistic/freight-management/listing',
        },
        
      ]
    },
    {
      path: 'reports', component: LogisticReportMainComponent,
      children: [
        { path: 'carrier-performance', component: CarrierPerformanceReportComponent },
        { path: 'delivery-note', component: DeliverysNoteReportComponent },
        { path: 'inventroys', component: InventroysComponent},
        { path: 'package-status', component: PackagesStatusReportComponent },
        {
          path: '**',
          redirectTo:
            '/scm/logistic/reports',
        },
        ]
    },
    {
      path: 'package', component: PackageMainComponent,
      children: [
        { path: 'add', component: PackageAddComponent },
        { path: 'listing', component: PackageListingComponent },
        { path: 'view', component: PackageViewComponent},
        { path: 'items', component: PackagesItemComponent },
        
        { path: 'print', component: PackagesPrintComponent },
        {
          path: '**',
          redirectTo:
            '/scm/logistic/package/listing',
        }, 
      ]
    },
    {
      path: 'shipment', component: ShipmentsMainComponent,
      children: [
        { path: 'add', component: ShipmentsAddComponent },
        { path: 'delivery-confirm', component: ShipmentsDeliveryConfirmComponent },
        { path: 'item', component: ShipmentsItemComponent },
        { path: 'listing', component: ShipmentsListingComponent },
        { path: 'print', component: ShipmentsPrintComponent},
        { path: 'view', component: ShipmentsViewComponent},
        {
          path: '**',
          redirectTo:
            '/scm/logistic/shipment/listing',
        }, 
      ]
    },


    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticRoutingModule { }
