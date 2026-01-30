import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IncomeManagementRoutingModule } from './income-management-routing.module';
import { AddIncomeComponent } from './add-income/add-income.component';
import { CropwiseIncomeComponent } from './cropwise-income/cropwise-income.component';
import { IncomeListComponent } from './income-list/income-list.component';
@NgModule({
  declarations: [
    AddIncomeComponent,
    CropwiseIncomeComponent,
    IncomeListComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IncomeManagementRoutingModule
    
  ]
})
export class IncomeManagementModule { }
