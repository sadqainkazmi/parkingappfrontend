import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { tap } from "rxjs/operators";
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookingcrudService {
  serverurl: any;
  constructor(public http: HttpClient) { this.serverurl = environment.apiUrl }
  bookparkingslot(bookingdetails: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/booking/createbooking', bookingdetails )
    .pipe(tap((res) => { return res })); 
  }
  listbookedslots(): Observable<any> {
    return this.http.get<any>(this.serverurl + '/booking/listbooking' )
    .pipe(tap((res) => { return res })); 
  }
  
  cancelbooking(bookingid: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/booking/deletebooking', bookingid )
    .pipe(tap((res) => { return res })); 
  }
 
  
    
}
