import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIncomeComponent } from './add-income/add-income.component';
import { CropwiseIncomeComponent } from './cropwise-income/cropwise-income.component';
import { IncomeListComponent } from './income-list/income-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path:'add', component:AddIncomeComponent},
  {path:'crop-wise',component:CropwiseIncomeComponent},
  {path:'list',component:IncomeListComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeManagementRoutingModule { }
