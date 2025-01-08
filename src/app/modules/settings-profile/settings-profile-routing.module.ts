import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsProfileComponent } from './settings-profile.component';
import { AdminMainsComponent } from './Administration-view/admin-mains/admin-mains.component';
import { AdminContactsTypesComponent } from './Administration-view/admin-contacts-types/admin-contacts-types.component';
import { AdminDiscountsComponent } from './Administration-view/admin-discounts/admin-discounts.component';
import { AdminPaymentsModeComponent } from './Administration-view/admin-payments-mode/admin-payments-mode.component';
import { AdminPaymentsTermsComponent } from './Administration-view/admin-payments-terms/admin-payments-terms.component';
import { AdminProductionPrioritysComponent } from './Administration-view/admin-production-prioritys/admin-production-prioritys.component';
import { AdminTaxComponent } from './Administration-view/admin-tax/admin-tax.component';
import { AdminUnitMeasureComponent } from './Administration-view/admin-unit-measure/admin-unit-measure.component';
import { UsersMainComponent } from './user/users-main/users-main.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DetailsUserComponent } from './user/details-user/details-user.component';
import { ListingUserComponent } from './user/listing-user/listing-user.component';
import { ResetUserComponent } from './user/reset-user/reset-user.component';
import { RolesUserComponent } from './user/roles-user/roles-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';


const routes: Routes = [
  { path: '', component: SettingsProfileComponent },
  {
    path: 'Administrations', component: AdminMainsComponent,
    children: [
      { path: 'contacts-types', component: AdminContactsTypesComponent },
      { path: 'admin-discounts', component: AdminDiscountsComponent },
      { path: 'admin-payments-mode', component: AdminPaymentsModeComponent},
      { path: 'admin-payments-terms', component: AdminPaymentsTermsComponent },
      { path: 'admin-production-prioritys', component: AdminProductionPrioritysComponent },
      { path: 'admin-tax', component: AdminTaxComponent },
      { path: 'admin-unit-measure', component: AdminUnitMeasureComponent },
      {
        path: '**',
        redirectTo:
          '/scm/settings/Administrations',
      },
      
    ]
  },
  {
    path: 'users', component: UsersMainComponent,
    children: [
      { path: 'add', component: AddUserComponent },
      { path: 'details', component: DetailsUserComponent },
      { path: 'listing', component: ListingUserComponent},
      { path: 'reset', component: ResetUserComponent },
      { path: 'roles', component: RolesUserComponent },
      { path: 'view', component: ViewUserComponent },
      {
      path: '**',
      redirectTo:
        '/scm/settings/users/listing',
    },
     ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsProfileRoutingModule { }
