import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UiTemplateComponent } from './ui-components/ui-template/ui-template.component';


import { LoginComponent } from './ui-components/login/login.component';
import { SignupComponent } from './ui-components/signup/signup.component';
import { DashboardMainComponent } from './modules/dashboard/dashboard-main/dashboard-main.component';
import { authGuard } from './services/auth/auth.guard';

import { Page404Component } from './ui-components/page-404/page-404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: '404', component: Page404Component },
  {
    path: 'scm',
    component: MainComponent, canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardMainComponent },
      {
        path:'warehouse',
        loadChildren:()=>import('./modules/warehouse-module/warehouse-module.module').then(m=>m.WarehouseModuleModule)
      },
      {
        path:'settings',
        loadChildren:()=>import('./modules/settings-profile/settings-profile.module').then(m=>m.SettingsProfileModule)
      },   
      {
        path:'logistic',
        loadChildren:()=>import('./modules/logistic/logistic.module').then(m=>m.LogisticModule)
      },   
      {
        path:'procurements',
        loadChildren:()=>import('./modules/procurements/procurements.module').then(m=>m.ProcurementsModule)
      },
      {
        path:'inventorys',
        loadChildren:()=>import('./modules/inventorys/inventorys.module').then(m=>m.InventorysModule)
      },    
      {
        path:'order-mangements',
        loadChildren:()=>import('./modules/order-mangements/order-mangements.module').then(m=>m.OrderMangementsModule)
      }, 
      {
        path:'manufacturings',
        loadChildren:()=>import('./modules/manufacturings/manufacturings.module').then(m=>m.ManufacturingsModule)
      }, 
      
     
      
      


      { path: '**', redirectTo: '/scm/dashboard' },
    ],
  },
  { path: '17/mock-template', component: UiTemplateComponent },
  { path: 'products', loadChildren: () => import('./modules/settings-profile/settings-profile.module').then(m => m.SettingsProfileModule) },
  { path: 'logistic', loadChildren: () => import('./modules/logistic/logistic.module').then(m => m.LogisticModule) },
  { path: '**', redirectTo: '/scm/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
