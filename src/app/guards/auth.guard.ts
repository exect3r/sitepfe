import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.authService.isLoggedIn()) {
      if (route.url[0].path == "login" || route.url[0].path == "register") {
        this.router.navigateByUrl('/home');
        return false;
      }
      
      return true;
    }
    
    if (route.url[0].path == "login" || route.url[0].path == "register")
      return true;
    
    this.router.navigateByUrl('/login');
    return false;
  }
  
}
