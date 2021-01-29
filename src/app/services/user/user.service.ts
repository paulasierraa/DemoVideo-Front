import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
//import model
import {user} from 'src/app/models/user.model'; 
//import enviroments to use api's url
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions={
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
    
  }
  constructor(private http:HttpClient) { }

  create(obUser:user)
  {
    return this.http.post(`${environment.url_api}/register/`,{"username":obUser.user,"first_name":obUser.name,"email":obUser.email,"password":obUser.password},this.httpOptions); //INSERTAR API
  }

  getAll():Observable<user[]>
  {
    return this.http.get<user[]>("url");
  }
  get(id:string)
  {
    return this.http.get<user>(`url/${id}`);
  }
  update(id:string,changes:Partial<user>)
  {
    return this.http.put(`apiurl/${id}`,changes);
  }
  delete(id:string)
  {
    return this.http.delete(`url/${id}`);
  }

}

