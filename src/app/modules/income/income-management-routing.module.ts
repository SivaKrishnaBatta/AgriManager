import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIncomeComponent } from './add-income/add-income.component';
import { CropwiseIncomeComponent } from './cropwise-income/cropwise-income.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path:'list',component:IncomeListComponent},
  {path:'add', component:AddIncomeComponent},
  {path:'edit/:id', component:AddIncomeComponent},
  { path: 'view/:id', component: IncomeDetailsComponent },
  {path:'crop-wise',component:CropwiseIncomeComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeManagementRoutingModule { }
