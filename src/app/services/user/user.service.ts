import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import model
import {user} from 'src/app/models/user.model'; 
//import enviroments to use api's url
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createUser(obUser:user)
  {
    return this.http.post(`${environment.url_api}/register/`,obUser); //INSERTAR API
  }
  // getAllUsers():Observable<user[]>
  // {
  //   return this.http.get<user[]>("url");
  // }
  // getUser(id:string)
  // {
  //   return this.http.get<user>(`url/${id}`);
  // }
  // updateUser(id:string,changes:Partial<user>)
  // {
  //   return this.http.put(`apiurl/${id}`,changes);
  // }
  // deleteUser(id:string)
  // {
  //   return this.http.delete(`url/${id}`);
  // }

}
