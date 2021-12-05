import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { tap } from "rxjs/operators";
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FeedbackcrudService {
  serverurl: any;
  constructor(public http: HttpClient) { this.serverurl = environment.apiUrl }
  givefeedback(msg: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/feedback/createfeedback', msg )
    .pipe(tap((res) => { return res })); 
  }
  listfeedbacks(): Observable<any> {
    return this.http.get<any>(this.serverurl + '/feedback/listfeedbacks' )
    .pipe(tap((res) => { return res })); 
  }
  
  reply(replyandid: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/feedback/reply', replyandid )
    .pipe(tap((res) => { return res })); 
  }
  deletefeedback(feedbackid: any): Observable<any> {
    return this.http.post<any>(this.serverurl + '/feedback/deletefeedback', feedbackid )
    .pipe(tap((res) => { return res })); 
  }
}
