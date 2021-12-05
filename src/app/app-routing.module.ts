import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from './APIservices/helpers/loginguard.service';
import { RedirectGuardService } from './APIservices/helpers/redirectguard.service';
import { ReLoginGuarService } from './APIservices/helpers/reloginguard.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('././registration/registration.module').then(m => m.RegistrationModule),
     canActivate:[ReLoginGuarService]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule),
    canActivate:[LoginGuardService]
  },
    
    {
      path: '',
      canActivate:[RedirectGuardService,LoginGuardService,],
      children:[]
    },
    {
      path: '**',
      redirectTo: 'dashboard/404'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
