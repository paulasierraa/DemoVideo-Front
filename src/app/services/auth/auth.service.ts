import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, filter,map} from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Login } from '../../models/Login.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentSession : Login = new Login();

  httpOptions={
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
    
  }
 

  constructor(private http:HttpClient) { 
     this.currentSession.setToken(this.loadSessionData()); //cargo la información de la sesión
  }

  loginUser(obLogin:Login){
    return this.http.post<Login>(`${environment.url_api}/login/`,{"username":obLogin.getUser(),"password":obLogin.getPassword()}).pipe(
      catchError(error=>{
        if(error.status===400)
        {
          error.message="Error al iniciar sesión";
        }
        return throwError(error);
      }),
      map(data=>data)
      );
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

  setSession(token:string,user:string):void { //guardaremos nuestro usuario
     this.currentSession= new Login();
     this.currentSession.setUser(user);
     this.currentSession.setToken(token);
    localStorage.setItem('currentUser',this.currentSession.getToken());
  }
  getCurrentSession(): Login {
    return this.currentSession;
  }

  getCurrentUser() {
    let session: Login = this.getCurrentSession();
    if(session)
    {
      return session.getUser();
    }
    return null;
  };

  getCurrentToken() {
    var session = this.getCurrentSession();
    return (session && session.getToken()) ? session.getToken() : null;
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
