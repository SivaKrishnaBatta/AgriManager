import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropListComponent } from './crop-list/crop-list.component';
import { AddCropComponent } from './add-crop/add-crop.component';
import { CropDetailsComponent } from './crop-details/crop-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
{path:'list', component:CropListComponent},
 { path: 'add', component: AddCropComponent },        // create
  { path: 'edit/:id', component: AddCropComponent },  // edit
  { path: 'view/:id', component: CropDetailsComponent  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropManagementRoutingModule { }
