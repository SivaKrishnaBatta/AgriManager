import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCropComponent } from './add-crop/add-crop.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { CropManagementRoutingModule } from './crop-management-routing.module';
import { CropDetailsComponent } from './crop-details/crop-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
@NgModule({
  declarations: [
    AddCropComponent, 
    CropListComponent, CropDetailsComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CropManagementRoutingModule,
    FormsModule,
    SharedModule
    
  ]
})
export class CropManagementModule { }
