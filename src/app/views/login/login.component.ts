import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FormsModule, PasswordModule, ButtonModule, FloatLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
login: string | undefined;
password: string | undefined;


handleLogin()
{
  console.log(this.login);
  console.log(this.password);
}
}


