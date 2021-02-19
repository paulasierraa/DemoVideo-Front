import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
//import model
import {user} from 'src/app/models/user.model'; 
//import enviroments to use api's url
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import {filter,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions={
    headers: new HttpHeaders({
      'Content-type':'application/json',
    })
    
  }
  constructor(private http:HttpClient) { }

  create(obUser:user)
  {
    return this.http.post(`${environment.url_api}/register/`,{
      "id_account":obUser.getId(),
      "username":obUser.getUser(),
      "full_name":obUser.getName(),
      "email":obUser.getEmail(),
      "password":obUser.getPassword(),
      "gender":obUser.getGender(),
      "id_city":obUser.getCity().getCityId(),
      "id_type_login":1,
      "id_type_account":1,
      "id_rol":1,
      "id_type_doc":1
  },this.httpOptions).pipe(map(data=>data)); //INSERTAR API
  }

  getAll():Observable<Object[]>
  {
    return this.http.get<Object[]>(`${environment.url_api}/register`);
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

