import { Component } from '@angular/core';

interface Faq {
  heading: string;
  isOpen: boolean;
}
@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.scss']
})
export class SupplierViewComponent {
  tabs = [ 'Transactions','Comments','Contacts'];
  selectedTab = 0;

  selectTab(tabName: any) {
    this.selectedTab = tabName;
  }

  faqs: Faq[] = [
    { heading: 'Purchase orders', isOpen: false },
    { heading: 'Purchase Revcevies', isOpen: false },
    { heading: 'Supplier Return ', isOpen: false },
   
   
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
