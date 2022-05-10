import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodAPIService {

  //injected httpclient to connect to api
  constructor(private http: HttpClient) { }

  getFood(food): Observable<any> {
    let header = new HttpHeaders(); //the api needed headers, so headers were added, the key is not blocked off. 
    header = header.set('X-RapidAPI-Host','edamam-food-and-grocery-database.p.rapidapi.com'); //headers are immutable so i have to reassign each time
    header = header.set('X-RapidAPI-Key','3eab73dbb3msh3eb77c53d2c2dbap1e06c0jsn1c78f2d94c4f');
    return this.http.get("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr="+food, {headers: header}); //food is the search name, added as a param to the api
    //the name is the param based on the api's documentation
  }
}
