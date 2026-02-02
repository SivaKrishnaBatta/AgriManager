import { Component } from '@angular/core';

@Component({
  selector: 'app-cropwise-income',
  templateUrl: './cropwise-income.component.html',
  styleUrls: ['./cropwise-income.component.scss']
})
export class CropwiseIncomeComponent {
  cropWiseIncome = [
    {
      cropName: 'Rice',
      totalAmount: 52000,
      incomes: [
        {
          date: '10 Jan 2026',
          quantity: 1200,
          amount: 36000,
          notes: 'Local market sale'
        },
        {
          date: '22 Jan 2026',
          quantity: 600,
          amount: 16000,
          notes: 'Wholesale buyer'
        }
      ]
    },
    {
      cropName: 'Wheat',
      totalAmount: 24000,
      incomes: [
        {
          date: '18 Jan 2026',
          quantity: 800,
          amount: 24000,
          notes: 'Bulk sale'
        }
      ]
    }
  ];

}
