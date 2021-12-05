import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { tap } from "rxjs/operators";
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RolecrudService {
  serverurl: any;
  constructor(public http: HttpClient) { this.serverurl = environment.apiUrl }
  createrole(details: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/role/createrole', details )
    .pipe(tap((res) => { return res })); 

     
  }

  updaterole(detailsandid: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/role/editrole', detailsandid )
    .pipe(tap((res) => { return res })); 

     
  }

  deleterole(id: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/role/deleterole', id )
    .pipe(tap((res) => { return res })); 

     
  }

 


  getallrole(): Observable<any> {
    return this.http.get<any>(this.serverurl + '/role/listrole', {} )
    .pipe(tap((res) => { return res })); 

     
  }
}
