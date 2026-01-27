import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { ActiveCropsComponent } from './active-crops/active-crops.component';
import { TotalExpensesComponent } from './total-expenses/total-expenses.component';
import { TotalIncomeComponent } from './total-income/total-income.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { DashboardCardsComponent } from './Dashboard-widgets/dashboard-cards/dashboard-cards.component';

@NgModule({
  declarations: [
    DashboardMainComponent,
    ActiveCropsComponent,
    TotalExpensesComponent,
    TotalIncomeComponent,
    ProfitLossComponent,
    DashboardCardsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
