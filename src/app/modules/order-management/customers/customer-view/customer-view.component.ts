import { Component } from '@angular/core';

interface Faq {
  heading: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent {

  tabs = [ 'Transactions','Comments','Contacts'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

  faqs: Faq[] = [
    { heading: 'Invoices', isOpen: false },
    { heading: 'Customer Payments', isOpen: false },
    { heading: 'Sales Orders', isOpen: false },
    { heading: 'Packages', isOpen: false },
    { heading: 'Delivery notes', isOpen: false },
    { heading: 'Credit Notes', isOpen: false }
  ];

  toggleFaq(faq: Faq): void {
    this.faqs.forEach(item => {
      if (item !== faq) {
        item.isOpen = false;
      }
    });
    faq.isOpen = !faq.isOpen;
  }

}
