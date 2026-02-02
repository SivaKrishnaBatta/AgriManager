import { Component } from '@angular/core';

@Component({
  selector: 'app-cropwise-expenses',
  templateUrl: './cropwise-expenses.component.html',
  styleUrls: ['./cropwise-expenses.component.scss']
})
export class CropwiseExpensesComponent {
  cropExpenses = [
    {
      cropName: 'Rice',
      totalAmount: 6200,
      expenses: [
        {
          date: '05 Jan 2026',
          category: 'Fertilizer',
          amount: 2500,
          notes: 'Urea'
        },
        {
          date: '10 Jan 2026',
          category: 'Labor',
          amount: 2200,
          notes: 'Harvest labor'
        },
        {
          date: '15 Jan 2026',
          category: 'Irrigation',
          amount: 1500,
          notes: 'Water charges'
        }
      ]
    },
    {
      cropName: 'Wheat',
      totalAmount: 3800,
      expenses: [
        {
          date: '08 Jan 2026',
          category: 'Seeds',
          amount: 1800,
          notes: 'Seed purchase'
        },
        {
          date: '18 Jan 2026',
          category: 'Labor',
          amount: 2000,
          notes: 'Field preparation'
        }
      ]
    }
  ];
}
