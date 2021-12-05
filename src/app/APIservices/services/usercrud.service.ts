import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { tap } from "rxjs/operators";
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsercrudService {
  serverurl: any;
  constructor(public http: HttpClient) { this.serverurl = environment.apiUrl }
 

  updateuser(detailsandid: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/user/updateuser', detailsandid )
    .pipe(tap((res) => { return res })); 

     
  }

  deleteuser(id: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/user/deleteuser', id )
    .pipe(tap((res) => { return res })); 

     
  }

  getuserbyid(id: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/user/getuserbyid', id )
    .pipe(tap((res) => { return res })); 

     
  }
  activeinactive(id: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/user/canactive', id )
    .pipe(tap((res) => { return res })); 

     
  }


  getuserall(): Observable<any> {
    return this.http.get<any>(this.serverurl + '/user/listalluser', {} )
    .pipe(tap((res) => { return res })); 

     
  }
}
