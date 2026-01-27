import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardMainComponent } from './Dashboard-widgets/DashboardSummaryComponent/dashboard-main.component';
import { ActiveCropsComponent } from './active-crops/active-crops.component';
import { TotalExpensesComponent } from './total-expenses/total-expenses.component';
import { TotalIncomeComponent } from './total-income/total-income.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardMainComponent,
    children: [
      { path: '', redirectTo: 'active-crops', pathMatch: 'full' },
      { path: 'active-crops', component: ActiveCropsComponent },
      { path: 'expenses', component: TotalExpensesComponent },
      { path: 'income', component: TotalIncomeComponent },
      { path: 'profit-loss', component: ProfitLossComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
