import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {
  isLoggedIn: boolean ;
  constructor( public router: Router) { }

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
 
  
  if (localStorage.getItem('logvalue')==null) {
    console.log('if');
    
     this.router.navigate(['/auth/signin']);
    //return true
  }

  return true
}

}
