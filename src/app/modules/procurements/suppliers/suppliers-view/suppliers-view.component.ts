import { Component } from '@angular/core';


interface Faq {
  heading: string;
  isOpen: boolean;
}
@Component({
  selector: 'app-suppliers-view',
  templateUrl: './suppliers-view.component.html',
  styleUrls: ['./suppliers-view.component.scss']
})
export class SuppliersViewComponent {
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
