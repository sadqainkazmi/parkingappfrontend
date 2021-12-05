import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ErrorComponent } from './error/error.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkingareasComponent } from './parkingareas/parkingareas.component';
import { ParkingareawithslotsComponent } from './parkingareawithslots/parkingareawithslots.component';
import { RoleComponent } from './role/role.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'customerdashboard',
          component: ParkingareasComponent,

          
        },
        {
          path: 'bookyourslot/:parkingareaid',
          component: ParkingComponent,

          
        },
        {
          path: 'listbookings',
          component: BookingComponent,

          
        },
        {
          path: 'listroles',
          component: RoleComponent,

          
        },
        {
          path: 'listusers',
          component: UsersComponent,

          
        },
        {
          path: 'listparkingareaslots',
          component: ParkingareawithslotsComponent,

          
        },
        {
          path: 'listfeedbacks',
          component: FeedbacksComponent,

          
        },
        {
          path: '404',
          component: ErrorComponent,

          
        },
       ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }