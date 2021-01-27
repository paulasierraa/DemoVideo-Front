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
  private currentSession : Session;

  constructor(private http:HttpClient) { 
    this.currentSession = this.loadSessionData(); //cargo la información de la sesión
  }

  loginUser(obLogin:Login):Observable<any>{
    return this.http.post(`${environment.url_api}/login`,JSON.stringify(obLogin),this.httpOptions).pipe(map(data=>data));
  }

  setSession(session:Session):void { //guardaremos nuestro usuario
    let session_string = JSON.stringify(session);
    localStorage.setItem('currentUser',session_string);
  }
  loadSessionData() //saber qué usuario está en ese momento
  {
    let user_string = localStorage.getItem('currentUser');
    if(user_string)
    {
      let user= JSON.parse(user_string);
      return user;
    }
    return null;
  }
  getCurrentSession(): Session {
    return this.currentSession;
  }
  getCurrentUser() {
    var session: Session = this.getCurrentSession();
    if(session)
    {
      return session.user;
    }
    return null;
  };
  
  getCurrentToken() {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  };

  logOutUser()
  {
    // let accesToken = localStorage.getItem('userInfo');
    // localStorage.removeItem('userInfo');
    localStorage.removeItem('currentUser');
    return this.http.post(`${environment.url_api}/logout`,this.httpOptions);
  }
  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };
  

}
 