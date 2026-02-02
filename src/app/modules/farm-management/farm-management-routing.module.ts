import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmsListComponent } from './farms-list/farms-list.component';
import { FarmFormComponent } from './farm-form/farm-form.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },

  { path: 'list', component: FarmsListComponent },

  { path: 'add', component: FarmFormComponent },        // create
  { path: 'edit/:id', component: FarmFormComponent },  // edit
  { path: 'view/:id', component: FarmDetailsComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmManagementRoutingModule { }
