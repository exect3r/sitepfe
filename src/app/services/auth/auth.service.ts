import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/auth'

  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post<any>(this.baseUrl+'/login',user);
  }

  register(user: User){
    return this.http.post<any>(this.baseUrl+'/register',user);
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }

  isLoggedIn(): boolean {
    let exp = this.getExpiration();
    console.log()
    if (exp == 0)
      return !!localStorage.getItem("token");
    return (Date.now() < exp) && !!localStorage.getItem("token");
  }

  getExpiration() : number {
    return +(localStorage.getItem("expires_at") || 0);
  }

  getUserId(): string {
    return localStorage.getItem("uid");
  }
}
