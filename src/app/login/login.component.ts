import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'pbhinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private route: Router,
    private loginService: LoginService
  ) {

  }

  login() {
    if (this.loginService.login(this.email, this.password)) {
      // this.route.navigate(['/rooms', 'add']);
      this.route.navigate(['/rooms']);
    }
  }
}
