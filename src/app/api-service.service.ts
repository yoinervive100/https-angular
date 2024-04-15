import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  api:string = 'assets/data/data.json' 
  constructor(private http: HttpClient){}
  hola(){
     return this.http.get(this.api);
 }

}
