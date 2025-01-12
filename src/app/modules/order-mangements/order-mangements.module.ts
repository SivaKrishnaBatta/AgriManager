import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderMangementsRoutingModule } from './order-mangements-routing.module';
import { OrderMangementsComponent } from './order-mangements.component';
import { CreditsMemoAddComponent } from './credits-memo/credits-memo-add/credits-memo-add.component';
import { CreidtsMemoItemsComponent } from './credits-memo/creidts-memo-items/creidts-memo-items.component';
import { CreditsMemoListingComponent } from './credits-memo/credits-memo-listing/credits-memo-listing.component';
import { CreditsMemoMainComponent } from './credits-memo/credits-memo-main/credits-memo-main.component';
import { CreditsMemoPrintComponent } from './credits-memo/credits-memo-print/credits-memo-print.component';
import { CreditsMemoViewComponent } from './credits-memo/credits-memo-view/credits-memo-view.component';
import { CustomerAddingComponent } from './customer/customer-adding/customer-adding.component';
import { CustomerCommentComponent } from './customer/customer-comment/customer-comment.component';
import { CustomerCreditNoteComponent } from './customer/customer-credit-note/customer-credit-note.component';
import { CustomerDeliverysComponent } from './customer/customer-deliverys/customer-deliverys.component';
import { CustomerInvoicesComponent } from './customer/customer-invoices/customer-invoices.component';
import { CustomersListingComponent } from './customer/customers-listing/customers-listing.component';
import { CustomerMainsComponent } from './customer/customer-mains/customer-mains.component';
import { CustomerPackageComponent } from './customer/customer-package/customer-package.component';
import { CustomerPaymentComponent } from './customer/customer-payment/customer-payment.component';
import { CustomersSoComponent } from './customer/customers-so/customers-so.component';
import { CustomerViewsComponent } from './customer/customer-views/customer-views.component';
import { InvoicesAddComponent } from './invoices/invoices-add/invoices-add.component';
import { InvoicesItemsComponent } from './invoices/invoices-items/invoices-items.component';
import { InvoicesListingComponent } from './invoices/invoices-listing/invoices-listing.component';
import { InvoicesMainComponent } from './invoices/invoices-main/invoices-main.component';
import { InvoicesPrintComponent } from './invoices/invoices-print/invoices-print.component';
import { InvoicesViewComponent } from './invoices/invoices-view/invoices-view.component';
import { InvoicePaymentStatusReportsComponent } from './orders-reports/invoice-payment-status-reports/invoice-payment-status-reports.component';
import { OrderFulFillmentReportComponent } from './orders-reports/order-ful-fillment-report/order-ful-fillment-report.component';
import { OrderReportMainsComponent } from './orders-reports/order-report-mains/order-report-mains.component';
import { ReturnOrderAnalysisReportsComponent } from './orders-reports/return-order-analysis-reports/return-order-analysis-reports.component';
import { SalesOrderSummerysComponent } from './orders-reports/sales-order-summerys/sales-order-summerys.component';
import { PaymentAddComponent } from './payment/payment-add/payment-add.component';
import { PaymentItemsComponent } from './payment/payment-items/payment-items.component';
import { PaymentListingComponent } from './payment/payment-listing/payment-listing.component';
import { PaymentMainComponent } from './payment/payment-main/payment-main.component';
import { PaymentPrintComponent } from './payment/payment-print/payment-print.component';
import { PaymentViewComponent } from './payment/payment-view/payment-view.component';
import { QuotesAddComponent } from './quotes/quotes-add/quotes-add.component';
import { QuotesLineitemsComponent } from './quotes/quotes-lineitems/quotes-lineitems.component';
import { QuotesListingComponent } from './quotes/quotes-listing/quotes-listing.component';
import { QuotesMainComponent } from './quotes/quotes-main/quotes-main.component';
import { QuotesPrintComponent } from './quotes/quotes-print/quotes-print.component';
import { QuotesViewComponent } from './quotes/quotes-view/quotes-view.component';
import { ReturnAddComponent } from './return-orders/return-add/return-add.component';
import { ReturnItemsComponent } from './return-orders/return-items/return-items.component';
import { ReturnListingComponent } from './return-orders/return-listing/return-listing.component';
import { ReturnMainComponent } from './return-orders/return-main/return-main.component';
import { ReturnPrintComponent } from './return-orders/return-print/return-print.component';
import { ReturnViewComponent } from './return-orders/return-view/return-view.component';
import { SalesAddComponent } from './sales-orders/sales-add/sales-add.component';
import { SalesItemsComponent } from './sales-orders/sales-items/sales-items.component';
import { SalesListingComponent } from './sales-orders/sales-listing/sales-listing.component';
import { SalesMainComponent } from './sales-orders/sales-main/sales-main.component';
import { SalesPrintComponent } from './sales-orders/sales-print/sales-print.component';
import { SalesViewComponent } from './sales-orders/sales-view/sales-view.component';
import { CustomerContactComponent } from './customer/customer-contact/customer-contact.component';
import { CustomersOrderHistroyReportComponent } from './orders-reports/customers-order-histroy-report/customers-order-histroy-report.component';
import { LogisticModule } from '../logistic/logistic.module';


@NgModule({
  declarations: [
    OrderMangementsComponent,
    CreditsMemoAddComponent,
    CreidtsMemoItemsComponent,
    CreditsMemoListingComponent,
    CreditsMemoMainComponent,
    CreditsMemoPrintComponent,
    CreditsMemoViewComponent,
    CustomerAddingComponent,
    CustomerCommentComponent,
    CustomerCreditNoteComponent,
    CustomerDeliverysComponent,
    CustomerInvoicesComponent,
    CustomersListingComponent,
    CustomerMainsComponent,
    CustomerPackageComponent,
    CustomerPaymentComponent,
    CustomersSoComponent,
    CustomerViewsComponent,
    InvoicesAddComponent,
    InvoicesItemsComponent,
    InvoicesListingComponent,
    InvoicesMainComponent,
    InvoicesPrintComponent,
    InvoicesViewComponent,
    InvoicePaymentStatusReportsComponent,
    OrderFulFillmentReportComponent,
    OrderReportMainsComponent,
    ReturnOrderAnalysisReportsComponent,
    SalesOrderSummerysComponent,
    PaymentAddComponent,
    PaymentItemsComponent,
    PaymentListingComponent,
    PaymentMainComponent,
    PaymentPrintComponent,
    PaymentViewComponent,
    QuotesAddComponent,
    QuotesLineitemsComponent,
    QuotesListingComponent,
    QuotesMainComponent,
    QuotesPrintComponent,
    QuotesViewComponent,
    ReturnAddComponent,
    ReturnItemsComponent,
    ReturnListingComponent,
    ReturnMainComponent,
    ReturnPrintComponent,
    ReturnViewComponent,
    SalesAddComponent,
    SalesItemsComponent,
    SalesListingComponent,
    SalesMainComponent,
    SalesPrintComponent,
    SalesViewComponent,
    CustomerContactComponent,
    CustomersOrderHistroyReportComponent,
     
  ],
  imports: [
    CommonModule,
    OrderMangementsRoutingModule,
    LogisticModule
    
  ]
})
export class OrderMangementsModule { }
