import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  constructor(private http: HttpClient ) { }

  getCharacter(url:string):Observable<any>{
    return  this.http.get(url);
  }
}
