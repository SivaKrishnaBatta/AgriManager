import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FieldManagementRoutingModule } from './field-management-routing.module';
import { FieldDeatilsComponent } from './field-deatils/field-deatils.component';
import{ FieldFarmsComponent } from './field-farms/field-farms.component';
import { FieldListComponent } from './field-list/field-list.component';

@NgModule({
  declarations: [
   FieldDeatilsComponent,
   FieldFarmsComponent,
   FieldListComponent
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldManagementRoutingModule 
  ]
})
export class FieldManagementModule { }
