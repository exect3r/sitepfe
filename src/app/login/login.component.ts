import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private authService: AuthService, private router: Router, private activeRoute: ActivatedRoute) { 
    activeRoute.url.subscribe(v => {
      if (v[0].path == "logout") {
        authService.logout();
        this.router.navigate(['/login']);
      }
    });
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.model).subscribe((response) => {
      if (!this.checked) { } // Backend tokens are always set to expire. TODO: add refresh tokens.
        localStorage.setItem('expires_at', response.expires_at);

      localStorage.setItem('token', response.access_token);
      localStorage.setItem('uid', response.uid);
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
    if(!this.checked){
      this.checked = true
    }else{
      this.checked = false
    }
  }

}
