import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RedirectGuardService implements CanActivate {
    constructor(private _router: Router) { }

    // canActivate
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       

       
       
    if ((localStorage.getItem('role') == 'admin')||( localStorage.getItem('role') == 'Admin')) {
console.log('admin');

          return  this._router.navigateByUrl('/dashboard/listparkingareaslots');
           
          }else if(localStorage.getItem('role') === 'customer'){
         return   this._router.navigateByUrl('/dashboard/customerdashboard');
          }
          

          // authorised so return true
          // console.log('authorized');
          return true
        }

       
      
    
}
