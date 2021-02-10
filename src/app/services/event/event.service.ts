import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../../../../Angular-course/platzi-store/platzi-store/src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private HttpClient:HttpClient) { }

  create(event:FormData){
    return this.HttpClient.post(`${environment.url_api}/events`,event);
  }
  getAll():Observable<Event[]>
  {
    return this.HttpClient.get<Event[]>(`${environment.url_api}/events`);
  }
  get(id:string):Observable<Event>
  {
    return this.HttpClient.get<Event>(`${environment.url_api}/videos/${id}`);
  }
  update(id:string,changes:Partial<Event>)
  {
    return this.HttpClient.put(`${environment.url_api}/video-update/${id}`,changes);
  }
  delete(id:string){
    return this.HttpClient.delete(`${environment.url_api}/video-delete/${id}`);
  }
}

