import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsProfileRoutingModule } from './settings-profile-routing.module';
import { SettingsProfileComponent } from './settings-profile.component';

import { AdminContactsTypesComponent } from './Administration-view/admin-contacts-types/admin-contacts-types.component';
import { AdminMainsComponent } from './Administration-view/admin-mains/admin-mains.component';
import { AdminDiscountsComponent } from './Administration-view/admin-discounts/admin-discounts.component';
import { AdminPaymentsModeComponent } from './Administration-view/admin-payments-mode/admin-payments-mode.component';
import { AdminPaymentsTermsComponent } from './Administration-view/admin-payments-terms/admin-payments-terms.component';
import { AdminProductionPrioritysComponent } from './Administration-view/admin-production-prioritys/admin-production-prioritys.component';
import { AdminTaxComponent } from './Administration-view/admin-tax/admin-tax.component';
import { AdminUnitMeasureComponent } from './Administration-view/admin-unit-measure/admin-unit-measure.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DetailsUserComponent } from './user/details-user/details-user.component';
import { ListingUserComponent } from './user/listing-user/listing-user.component';
import { UsersMainComponent } from './user/users-main/users-main.component';
import { ResetUserComponent } from './user/reset-user/reset-user.component';
import { RolesUserComponent } from './user/roles-user/roles-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SettingsProfileComponent,
    
    AdminContactsTypesComponent,
    AdminMainsComponent,
    AdminDiscountsComponent,
    AdminPaymentsModeComponent,
    AdminPaymentsTermsComponent,
    AdminProductionPrioritysComponent,
    AdminTaxComponent,
    AdminUnitMeasureComponent,
    AddUserComponent,
    DetailsUserComponent,
    ListingUserComponent,
    UsersMainComponent,
    ResetUserComponent,
    RolesUserComponent,
    ViewUserComponent,
   
    
  ],
  imports: [
    CommonModule,
    SettingsProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class SettingsProfileModule { }
