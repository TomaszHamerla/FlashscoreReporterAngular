import {Component} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {FloatLabelModule} from 'primeng/floatlabel';
import {AuthService} from "../../service/services/auth.service";
import {RegisterForm} from "../../service/models/register-form";
import {LoginForm} from "../../service/models/login-form";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FormsModule, PasswordModule, ButtonModule, FloatLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: string | undefined;
  password: string | undefined;

  constructor(
    private authService: AuthService
  ) {
  }

  handleLogin() {
    const loginForm: LoginForm = {login: this.login, passwd: this.password};
    this.authService.login(loginForm).subscribe({
      next: (val) => {
      }
    })
  }

}


