import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReLoginGuarService {
 
  constructor( public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
  
  if (localStorage.getItem('logvalue') !== null) {
      if(localStorage.getItem('role')==='customer'){
    this.router.navigate(['/dashboard/customerdashboard']);
      }else{
         this.router.navigate(['/dashboard/listparkingareaslots']);
      }
  }

  return true
}

}
