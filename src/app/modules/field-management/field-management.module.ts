import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FieldManagementRoutingModule } from './field-management-routing.module';
import { FieldDeatilsComponent } from './field-deatils/field-deatils.component';
import{ FieldFarmsComponent } from './field-farms/field-farms.component';
import { FieldListComponent } from './field-list/field-list.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
   FieldDeatilsComponent,
   FieldFarmsComponent,
   FieldListComponent
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldManagementRoutingModule ,
    SharedModule
  ]
})
export class FieldManagementModule { }
