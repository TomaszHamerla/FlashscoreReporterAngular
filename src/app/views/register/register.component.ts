import {Component} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {FloatLabelModule} from 'primeng/floatlabel';
import {AuthService} from "../../service/services/auth.service";
import {RegisterForm} from "../../service/models/register-form";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputTextModule, FormsModule, PasswordModule, ButtonModule, FloatLabelModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  login: string | undefined;
  password: string | undefined;

  constructor(
    private authService: AuthService
  ) {
  }

  handleRegistration() {
    const registerForm: RegisterForm = {login: this.login, passwd: this.password};
    this.authService.register(registerForm).subscribe({
      next: (val) => {
        console.log(val)
      }
    })
  }

}


