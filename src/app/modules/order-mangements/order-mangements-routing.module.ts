import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderMangementsComponent } from './order-mangements.component';
import { CreditsMemoMainComponent } from './credits-memo/credits-memo-main/credits-memo-main.component';
import { CreditsMemoAddComponent } from './credits-memo/credits-memo-add/credits-memo-add.component';
import { CreditsMemoListingComponent } from './credits-memo/credits-memo-listing/credits-memo-listing.component';
import { CreidtsMemoItemsComponent } from './credits-memo/creidts-memo-items/creidts-memo-items.component';
import { CreditsMemoViewComponent } from './credits-memo/credits-memo-view/credits-memo-view.component';
import { CreditsMemoPrintComponent } from './credits-memo/credits-memo-print/credits-memo-print.component';
import { CustomerMainsComponent } from './customer/customer-mains/customer-mains.component';
import { CustomerAddingComponent } from './customer/customer-adding/customer-adding.component';
import { CustomerCommentComponent } from './customer/customer-comment/customer-comment.component';
import { CustomerCreditNoteComponent } from './customer/customer-credit-note/customer-credit-note.component';
import { CustomerDeliverysComponent } from './customer/customer-deliverys/customer-deliverys.component';
import { CustomerInvoicesComponent } from './customer/customer-invoices/customer-invoices.component';
import { CustomerPackageComponent } from './customer/customer-package/customer-package.component';
import { CustomerPaymentComponent } from './customer/customer-payment/customer-payment.component';
import { CustomerViewsComponent } from './customer/customer-views/customer-views.component';
import { CustomersListingComponent } from './customer/customers-listing/customers-listing.component';
import { CustomersSoComponent } from './customer/customers-so/customers-so.component';
import { InvoicesMainComponent } from './invoices/invoices-main/invoices-main.component';
import { InvoicesAddComponent } from './invoices/invoices-add/invoices-add.component';
import { InvoicesListingComponent } from './invoices/invoices-listing/invoices-listing.component';
import { InvoicesViewComponent } from './invoices/invoices-view/invoices-view.component';
import { InvoicesItemsComponent } from './invoices/invoices-items/invoices-items.component';
import { InvoicesPrintComponent } from './invoices/invoices-print/invoices-print.component';
import { OrderReportMainsComponent } from './orders-reports/order-report-mains/order-report-mains.component';
import { CustomersOrderHistroyReportComponent } from './orders-reports/customers-order-histroy-report/customers-order-histroy-report.component';
import { InvoicePaymentStatusReportsComponent } from './orders-reports/invoice-payment-status-reports/invoice-payment-status-reports.component';
import { OrderFulFillmentReportComponent } from './orders-reports/order-ful-fillment-report/order-ful-fillment-report.component';
import { ReturnOrderAnalysisReportsComponent } from './orders-reports/return-order-analysis-reports/return-order-analysis-reports.component';
import { SalesOrderSummerysComponent } from './orders-reports/sales-order-summerys/sales-order-summerys.component';
import { PaymentMainComponent } from './payment/payment-main/payment-main.component';
import { PaymentAddComponent } from './payment/payment-add/payment-add.component';
import { PaymentListingComponent } from './payment/payment-listing/payment-listing.component';
import { PaymentViewComponent } from './payment/payment-view/payment-view.component';
import { PaymentItemsComponent } from './payment/payment-items/payment-items.component';
import { PaymentPrintComponent } from './payment/payment-print/payment-print.component';
import { QuotesMainComponent } from './quotes/quotes-main/quotes-main.component';
import { QuotesAddComponent } from './quotes/quotes-add/quotes-add.component';
import { QuotesListingComponent } from './quotes/quotes-listing/quotes-listing.component';
import { QuotesLineitemsComponent } from './quotes/quotes-lineitems/quotes-lineitems.component';
import { QuotesPrintComponent } from './quotes/quotes-print/quotes-print.component';
import { QuotesViewComponent } from './quotes/quotes-view/quotes-view.component';
import { ReturnMainComponent } from './return-orders/return-main/return-main.component';
import { ReturnAddComponent } from './return-orders/return-add/return-add.component';
import { ReturnListingComponent } from './return-orders/return-listing/return-listing.component';
import { ReturnViewComponent } from './return-orders/return-view/return-view.component';
import { ReturnItemsComponent } from './return-orders/return-items/return-items.component';
import { ReturnPrintComponent } from './return-orders/return-print/return-print.component';
import { SalesMainComponent } from './sales-orders/sales-main/sales-main.component';
import { SalesAddComponent } from './sales-orders/sales-add/sales-add.component';
import { SalesListingComponent } from './sales-orders/sales-listing/sales-listing.component';
import { SalesViewComponent } from './sales-orders/sales-view/sales-view.component';
import { SalesItemsComponent } from './sales-orders/sales-items/sales-items.component';
import { SalesPrintComponent } from './sales-orders/sales-print/sales-print.component';

const routes: Routes = [
  { path: '', component: OrderMangementsComponent },
   {
        path: 'credit-memo', component: CreditsMemoMainComponent,
        children: [
          { path: 'add', component: CreditsMemoAddComponent },
          { path: 'listing', component: CreditsMemoListingComponent },
          { path: 'view', component: CreditsMemoViewComponent},
          { path: 'items', component: CreidtsMemoItemsComponent},
          
          { path: 'print', component: CreditsMemoPrintComponent },
          {
            path: '**',
            redirectTo:
              '/scm/order-mangements/credit-memo/listing',
          }, 
        ]
      },
      {
        path: 'customer', component: CustomerMainsComponent,
        children: [
          { path: 'add', component: CustomerAddingComponent },
          { path: 'comment', component: CustomerCommentComponent },
          { path: 'credit-note', component: CustomerCreditNoteComponent},
          { path: 'delivery', component: CustomerDeliverysComponent},
          
          { path: 'invoice', component: CustomerInvoicesComponent },
          { path: 'package', component: CustomerPackageComponent },
          { path: 'payment', component: CustomerPaymentComponent },
          { path: 'view', component: CustomerViewsComponent},
          { path: 'listing', component: CustomersListingComponent},
          
          { path: 'so', component: CustomersSoComponent },
          {
            path: '**',
            redirectTo:
              '/scm/order-mangements/customer/listing',
          }, 
        ]
      },
      {
        path: 'invoices', component: InvoicesMainComponent,
        children: [
          { path: 'add', component: InvoicesAddComponent },
          { path: 'listing', component: InvoicesListingComponent},
          { path: 'view', component: InvoicesViewComponent},
          { path: 'items', component: InvoicesItemsComponent},
          
          { path: 'print', component: InvoicesPrintComponent},
          {
            path: '**',
            redirectTo:
              '/scm/order-mangements/invoices/listing',
          }, 
        ]
      },
      {
        path: 'order-reports', component: OrderReportMainsComponent,
        children: [
          { path: 'customer-reports', component: CustomersOrderHistroyReportComponent },
          { path: 'payments-reports', component: InvoicePaymentStatusReportsComponent},
          { path: 'fillment-reports', component: OrderFulFillmentReportComponent},
          { path: 'analysis-reports', component: ReturnOrderAnalysisReportsComponent},
          
          { path: 'sales-order', component: SalesOrderSummerysComponent},
          {
            path: '**',
            redirectTo:
              '/scm/order-mangements/order-reports',
          }, 
        ]
      },
      {
        path: 'payments', component: PaymentMainComponent,
        children: [
          { path: 'add', component: PaymentAddComponent},
          { path: 'listing', component: PaymentListingComponent},
          { path: 'view', component: PaymentViewComponent},
          { path: 'items', component: PaymentItemsComponent},
          
          { path: 'print', component: PaymentPrintComponent},
          {
            path: '**',
            redirectTo:
              '/scm/order-mangements/payments/listing',
          }, 
        ]
      },
      {
        path: 'quotes', component:QuotesMainComponent ,
        children: [
          { path: 'add', component: QuotesAddComponent},
          { path: 'lineitems', component: QuotesLineitemsComponent},
          { path: 'listing', component: QuotesListingComponent},
          { path: 'view', component:QuotesViewComponent},
          
          
          { path: 'print', component: QuotesPrintComponent},
          {
            path: '**',
            redirectTo:
              '/scm/order-mangements/quotes/listing',
          }, 
        ]
      },
      {
        path: 'return-orders', component: ReturnMainComponent,
        children: [
          { path: 'add', component: ReturnAddComponent},
          { path: 'listing', component: ReturnListingComponent},
          { path: 'view', component: ReturnViewComponent},
          { path: 'items', component: ReturnItemsComponent},
          
          { path: 'print', component: ReturnPrintComponent},
          {
            path: '**',
            redirectTo:
              '/scm/order-mangements/return-orders/listing',
          }, 
        ]
      },
      {
        path: 'sales-orders', component: SalesMainComponent,
        children: [
          { path: 'add', component: SalesAddComponent},
          { path: 'listing', component: SalesListingComponent},
          { path: 'view', component: SalesViewComponent},
          { path: 'items', component: SalesItemsComponent},
          
          { path: 'print', component: SalesPrintComponent},
          {
            path: '**',
            redirectTo:
              '/scm/order-mangements/sales-orders/listing',
          }, 
        ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderMangementsRoutingModule { }
