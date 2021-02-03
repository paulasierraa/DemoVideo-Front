import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../Angular-course/platzi-store/platzi-store/src/environments/environment.prod';
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

  upload(video:Video,file:FormData)
  {
      return this.http.post(`${environment.url_api}/uplodad`,{"title":video.name,"description":video.description,"videofile":file},this.httpOptions);
  }
  getAll():Observable<Video[]>
  {
    return this.http.get<Video[]>(`${environment.url_api}/getVideo`);
  }
  get(id:string):Observable<Video>
  {
    return this.http.get<Video>(`${environment.url_api}/getVideo/${id}`);
  }
}
