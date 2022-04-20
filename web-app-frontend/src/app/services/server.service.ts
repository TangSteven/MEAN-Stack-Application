//service created for the frontend to access the express backend
//and all the access points


import { Injectable } from '@angular/core';

//import httpclient, allows the service to access the backened
import {HttpClient} from '@angular/common/http';

//provides support for passing messages between parts of the app
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  login(user): Observable<any> {
    return this.http.post("http://localhost:3000/login", user);
  }

  register(user): Observable<any> {
    return this.http.post("http://localhost:3000/register", user);
  }
}
