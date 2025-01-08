import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticRoutingModule } from './logistic-routing.module';
import { LogisticComponent } from './logistic.component';
import { BookItemsComponent } from './Booking/book-items/book-items.component';
import { BookTrackComponent } from './Booking/book-track/book-track.component';
import { BookAddComponent } from './Booking/book-add/book-add.component';
import { BookListingComponent } from './Booking/book-listing/book-listing.component';
import { BookMainComponent } from './Booking/book-main/book-main.component';
import { BookPrintComponent } from './Booking/book-print/book-print.component';
import { BookViewComponent } from './Booking/book-view/book-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryStateCityModule } from '../common-components/country-state-city/country-state-city.module';
import { AddCarrierComponent } from './carrier-management/add-carrier/add-carrier.component';
import { ListingCarrierComponent } from './carrier-management/listing-carrier/listing-carrier.component';
import { MainCarrierComponent } from './carrier-management/main-carrier/main-carrier.component';
import { ViewCarrierComponent } from './carrier-management/view-carrier/view-carrier.component';
import { AddDeliverComponent } from './delivery-note/add-deliver/add-deliver.component';
import { ItemsDeliveryComponent } from './delivery-note/items-delivery/items-delivery.component';
import { ListingDeliveryComponent } from './delivery-note/listing-delivery/listing-delivery.component';
import { MainDeliveryComponent } from './delivery-note/main-delivery/main-delivery.component';
import { PrintDeliveryComponent } from './delivery-note/print-delivery/print-delivery.component';
import { ViewDeliveryComponent } from './delivery-note/view-delivery/view-delivery.component';
import { AddFreightComponent } from './freight-management/add-freight/add-freight.component';
import { CalculationFreightComponent } from './freight-management/calculation-freight/calculation-freight.component';
import { DimensionsFreightComponent } from './freight-management/dimensions-freight/dimensions-freight.component';
import { ListingFreightComponent } from './freight-management/listing-freight/listing-freight.component';
import { MainFreightComponent } from './freight-management/main-freight/main-freight.component';
import { RateFreightComponent } from './freight-management/rate-freight/rate-freight.component';
import { ServiceTaxFreightComponent } from './freight-management/service-tax-freight/service-tax-freight.component';
import { ShippingMethodFreightComponent } from './freight-management/shipping-method-freight/shipping-method-freight.component';
import { ViewFreightComponent } from './freight-management/view-freight/view-freight.component';
import { WeightRangeFreightComponent } from './freight-management/weight-range-freight/weight-range-freight.component';
import { CarrierPerformanceReportComponent } from './logistic-report/carrier-performance-report/carrier-performance-report.component';




@NgModule({
  declarations: [
    LogisticComponent,
    BookItemsComponent,
    BookTrackComponent,
    BookAddComponent,
    BookListingComponent,
    BookMainComponent,
    BookPrintComponent,
    BookViewComponent,
    AddCarrierComponent,
    ListingCarrierComponent,
    MainCarrierComponent,
    ViewCarrierComponent,
    AddDeliverComponent,
    ItemsDeliveryComponent,
    ListingDeliveryComponent,
    MainDeliveryComponent,
    PrintDeliveryComponent,
    ViewDeliveryComponent,
    AddFreightComponent,
    CalculationFreightComponent,
    DimensionsFreightComponent,
    ListingFreightComponent,
    MainFreightComponent,
    RateFreightComponent,
    ServiceTaxFreightComponent,
    ShippingMethodFreightComponent,
    ViewFreightComponent,
    WeightRangeFreightComponent,
    CarrierPerformanceReportComponent,
    
  ],
  imports: [
    CommonModule,
    LogisticRoutingModule,
    ReactiveFormsModule,
    CountryStateCityModule

  ]
})
export class LogisticModule { }
