import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new User();
  wrong : boolean = true
  checked:boolean = false;
  constructor(private authService: AuthService,private router: Router) { }
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.model).subscribe((response) => {
      if(this.checked==true){
        localStorage.setItem('token', response.access_token);
      }else{
        sessionStorage.setItem('token', response.access_token);
      }
      localStorage.setItem('email',this.model.username)
      this.router.navigate(['/home']);
      
    },
    (error) => {
      if (error.status == 401){
        this.wrong = false
      }
    });
  }

  check(){
    if(this.checked==false ){
      this.checked = true
    }else{
      this.checked = false
    }
  }

}
