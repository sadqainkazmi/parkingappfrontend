import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { tap } from "rxjs/operators";
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ParkingcrudService {
  serverurl: any;
  constructor(public http: HttpClient) { this.serverurl = environment.apiUrl }
  createparkingarea(details: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/parkingarea/createparkingarea', details )
    .pipe(tap((res) => { return res })); 
  }
  listarea(): Observable<any> {
    return this.http.get<any>(this.serverurl + '/parkingarea/listparkingareas' )
    .pipe(tap((res) => { return res })); 
  }
  
  editparkingarea(detailsandid: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/parkingarea/editparkingarea', detailsandid )
    .pipe(tap((res) => { return res })); 
  }
  deleteparkingarea(areaid: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/parkingarea/deleteparkingarea', areaid )
    .pipe(tap((res) => { return res })); 
  }
  getslotsbyareaid(areaid: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/parkingarea/getparkingareaslots', areaid )
    .pipe(tap((res) => { return res })); 
  }
}
