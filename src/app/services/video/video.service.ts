import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { env } from 'process';
import { Video } from '../../models/Video';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  httpOptions={
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
    
  }
  constructor(private http:HttpClient) { }

  upload(file:FormData)
  {
      return this.http.post(`${environment.url_api}/videos/`,file);
  }
  getAll():Observable<Video[]>
  {
    return this.http.get<Video[]>(`${environment.url_api}/videos/`);
  }
  get(id:string):Observable<Video>
  {
    return this.http.get<Video>(`${environment.url_api}/videos/${id}`);
  }
}
