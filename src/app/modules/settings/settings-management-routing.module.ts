import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ExpenseCategorySetupComponent } from './expense-category-setup/expense-category-setup.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
{path:'change-password', component:ChangePasswordComponent},
{path:'expense-categories', component:ExpenseCategorySetupComponent},
{path:'profile', component:ProfileComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsManagementRoutingModule { }
