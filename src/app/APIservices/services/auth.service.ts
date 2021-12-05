import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { tap } from "rxjs/operators";
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverurl: any;
  constructor(public http: HttpClient) { this.serverurl = environment.apiUrl }

signup(userdetails: any): Observable<any> {
  return this.http.post<any>(this.serverurl + '/user/createuser', userdetails )
  .pipe(tap((res) => { return res })); 
}
signin(usercredentials: any): Observable<any> {
  return this.http.post<any>(this.serverurl + '/user/login', usercredentials )
  .pipe(tap((res) => { return res })); 
}



}
