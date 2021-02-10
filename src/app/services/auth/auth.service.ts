import { Injectable } from '@angular/core';
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
  private currentSession : Login = new Login();

  constructor(private http:HttpClient) { 
     this.currentSession.token = this.loadSessionData(); //cargo la información de la sesión
  }

  loadSessionData() //saber qué usuario está en ese momento
  {
    let user_string = localStorage.getItem('currentUser');
    if(user_string)
    {     
      return user_string;
    }
    return null;
  }

  loginUser(obLogin:Login):Observable<Login>{
    return this.http.post<Login>(`${environment.url_api}/login/`,{"username":obLogin.user,"password":obLogin.password},this.httpOptions).pipe(map(data=>data));
  }

  setSession(session:Login):void { //guardaremos nuestro usuario
     this.currentSession= new Login();
     this.currentSession.token=session.token;
    localStorage.setItem('currentUser',this.currentSession.token);
  }
  getCurrentSession(): Login {
    return this.currentSession;
  }

  // getCurrentUser() {
  //   var session: Login = this.getCurrentSession();
  //   if(session)
  //   {
  //     return session.user;
  //   }
  //   return null;
  // };

  getCurrentToken() {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  };


  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  logOutUser()
  {
    localStorage.removeItem('currentUser');
    return this.http.post(`${environment.url_api}/logout`,this.httpOptions);
  }

}
