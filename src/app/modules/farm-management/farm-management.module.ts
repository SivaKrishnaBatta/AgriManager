import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FarmManagementRoutingModule } from './farm-management-routing.module';
import { FarmsListComponent } from './farms-list/farms-list.component';
import { FarmFormComponent } from './farm-form/farm-form.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    FarmsListComponent,
    FarmFormComponent,
    FarmDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FarmManagementRoutingModule,
    SharedModule
  ]
})
export class FarmManagementModule { }
