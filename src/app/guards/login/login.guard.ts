import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { threadId } from 'worker_threads';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router,private authService:AuthService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authService.getCurrentUser())
    {
      return this.router.parseUrl('/login');
    }
      return true;
  }
  
}
