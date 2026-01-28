import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldListComponent } from './field-list/field-list.component';
import { FieldFarmsComponent } from './field-farms/field-farms.component';
import { FieldDeatilsComponent } from './field-deatils/field-deatils.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },

  { path: 'list', component: FieldListComponent },

  { path: 'add', component: FieldFarmsComponent },        // create
  { path: 'edit/:id', component: FieldFarmsComponent },  // edit
  { path: 'view/:id', component: FieldDeatilsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldManagementRoutingModule { }