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
 
  //inject httpclient as http
  constructor(private http: HttpClient) { }

  //the parameter is the user and pass
  login(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/login", user, {withCredentials: true});
    //returns an observable after connecting to the backend with method POST and user as req.body

  }

  
  register(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/register", user, {withCredentials: true});
    //returns an observable after connecting to the backend with method POST and user as req.body
  }

  getFoods(user: any): Observable<any> {
    console.log(user);
    return this.http.get("http://localhost:3000/api/user/"+user, {withCredentials: true})
  }
}
