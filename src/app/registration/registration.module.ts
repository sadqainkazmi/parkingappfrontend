import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../APIservices/services/auth.service';
import { RolecrudService } from '../APIservices/services/rolecrud.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../APIservices/helpers/interceptor.service';



@NgModule({
    declarations: [ 
    LoginComponent, SignupComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
       RegistrationRoutingModule,
       HttpClientModule,

    ],

    providers: [AuthService,RolecrudService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }]
})
export class RegistrationModule { }
