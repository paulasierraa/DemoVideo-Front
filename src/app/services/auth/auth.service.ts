import { Injectable } from '@angular/core';
import { Session } from '../../models/Session.model';
import { Observable } from 'rxjs';
import {filter,map} from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Login } from '../../models/Login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions={
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
    
  }
  private currentSession : Login;

  constructor(private http:HttpClient) { 
    this.currentSession = this.loadSessionData(); //cargo la información de la sesión
  }

  loginUser(obLogin:Login):Observable<any>{
    return this.http.post(`${environment.url_api}/login/`,{"username":obLogin.obUser.user,"password":obLogin.obUser.password},this.httpOptions).pipe(map(data=>data));
  }

  setSession(session:Login):void { //guardaremos nuestro usuario
    this.currentSession=session;
    localStorage.setItem('currentUser',JSON.stringify(session));
  }
  getCurrentSession(): Login {
    return this.currentSession;
  }
  getCurrentUser() {
    var session: Login = this.getCurrentSession();
    if(session)
    {
      return session.obUser;
    }
    return null;
  };

  getCurrentToken() {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  };

  logOutUser()
  {
    localStorage.removeItem('currentUser');
    return this.http.post(`${environment.url_api}/logout`,this.httpOptions);
  }
  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };
  

}
  // loadSessionData() //saber qué usuario está en ese momento
  // {
  //   let user_string = localStorage.getItem('currentUser');
  //   if(user_string)
  //   {
  //     let user= JSON.parse(user_string);
  //     return user;
  //   }
  //   return null;
  // }