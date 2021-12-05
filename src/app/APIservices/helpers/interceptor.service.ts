import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse

} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';;
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


/*
  Generated class for the InterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class InterceptorService implements HttpInterceptor {
  
 
  constructor(private route : Router) {


  }
  showmissing() {
    Swal.fire({
      title: 'Session Expired!',
      text: 'Please Login Again to Continue',
      icon: 'warning',
     
    })
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
console.log('interceptor');

    if (!localStorage.getItem('accesstoken')) {
      // console.log('With---out------Authorization========>')
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': `application/json`,
          'Cache-Control':  'no-cache, no-store, must-revalidate, post- check=0, pre-check=0',
          'Pragma': 'no-cache'
        }
      });
    } else {
      // console.log('WithAuthorization========>');

      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': `application/json`,
          'Cache-Control':  'no-cache, no-store, must-revalidate, post- check=0, pre-check=0',
          'Pragma':'no-cache',

          Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
        }
      });
    }
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // console.log('event instance of httpres', event)
      //  this.Cryptography.setItem('viewindex', '0',true);
      }
    }, (err: any) => {

      if (err instanceof HttpErrorResponse) {
        console.log('err instance of errr', err)
        if (err.status === 403) {
          console.log('err instance of errrif', err)

          this.showmissing();
          localStorage.clear();
          // let ve = this.authservice.isLoggedIn = false;
          // alert('login again to continue')
         this.route.navigate(['auth/signin']);
        }
      }
    }));
  }
}
