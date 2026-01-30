import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsManagementRoutingModule } from './settings-management-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ExpenseCategorySetupComponent } from './expense-category-setup/expense-category-setup.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    ChangePasswordComponent,
    ExpenseCategorySetupComponent,
    ProfileComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SettingsManagementRoutingModule
    
  ]
})
export class SettingsManagementModule { }
