import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ParkingareasComponent } from './parkingareas/parkingareas.component';
import { ParkingComponent } from './parking/parking.component';
import { BookingComponent } from './booking/booking.component';
import { UsersComponent } from './users/users.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleComponent } from './role/role.component';
import { ParkingareawithslotsComponent } from './parkingareawithslots/parkingareawithslots.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../APIservices/helpers/interceptor.service';
import { FormsModule } from '@angular/forms';
import { ParkingcrudService } from '../APIservices/services/parkingcrud.service';
import { UsercrudService } from '../APIservices/services/usercrud.service';
import { BookingcrudService } from '../APIservices/services/bookingcrud.service';
import { RolecrudService } from '../APIservices/services/rolecrud.service';
import { FeedbackcrudService } from '../APIservices/services/feedbackcrud.service';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
    declarations: [ 
   ParkingareasComponent,
   ParkingComponent,
   BookingComponent,
   UsersComponent,
   RoleComponent,
   ParkingareawithslotsComponent,
   FeedbacksComponent,
   ErrorComponent,
  ],
    imports: [
      CommonModule,
        NgbModule,
        FormsModule,
       HttpClientModule,
      DashboardRoutingModule

    ],

    providers: [ParkingcrudService,UsercrudService,BookingcrudService,RolecrudService,FeedbackcrudService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }]
})
export class DashboardModule { }
