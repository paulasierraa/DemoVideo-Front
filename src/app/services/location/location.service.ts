import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../../models/Country.models';
import { City } from '../../models/City.models';

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
    getAllCountries():Observable<Country[]>
    {
      return this.http.get<Country[]>(`${environment.url_api}/country`);
    }
    getAllCities():Observable<City[]>
    {
      return this.http.get<City[]>(`${environment.url_api}/city`);
    }
    
}