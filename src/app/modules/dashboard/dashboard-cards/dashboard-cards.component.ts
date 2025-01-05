import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss']
})
export class DashboardCardsComponent {

  cards = [
    { title: 'Sales Orders', icon: 'fa-file-invoice-dollar', count: 1, finalCount: 720 },
    { title: 'Purchase Orders', icon: 'fa-boxes-stacked', count: 1, finalCount: 560 },
    { title: 'Shipments', icon: 'fa-truck', count: 1, finalCount: 442 },
    { title: 'Payments', icon: 'fa-dollar-sign', count: 1, finalCount: 390 }
  ];

  ngOnInit(): void {
    this.cards.forEach((card, index) => {
      this.startCounting(index);
    });
  }

  // Function to start counting for each card
  startCounting(cardIndex: number) {
    const intervalId = setInterval(() => {
      if (this.cards[cardIndex].count < this.cards[cardIndex].finalCount) {
        this.cards[cardIndex].count++;
      } else {
        clearInterval(intervalId);  
      }
    }, 7);  
  }

}
