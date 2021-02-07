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
    return this.http.post<any>('http://localhost:3000/users'+'/addStudent',{name:user.firstname,lastname:user.lastname,password:user.password, email:user.email});
  }
}
