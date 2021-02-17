import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../../models/Country.models';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
 
  constructor(private http:HttpClient) {

   }
   httpOptions={
    headers: new HttpHeaders({
      'Content-type':'application/json',
    })};
    getAll():Observable<Country[]>
    {
      return this.http.get<Country[]>(`${environment.url_api}`);
    }
    
}