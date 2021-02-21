import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http:HttpClient) { }

  upload(file:FormData)
  {
      return this.http.post(`${environment.url_api}/files/`,file);
  }
  getAll():Observable<any[]>
  {
    return this.http.get<any[]>(`${environment.url_api}/files/`);
  }
  get(id:string):Observable<any>
  {
    return this.http.get<any[]>(`${environment.url_api}/files/${id}`);
  }
}
