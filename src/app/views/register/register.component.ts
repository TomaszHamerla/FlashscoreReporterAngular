import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
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

handleRegistration()
{
  console.log(this.login);
  console.log(this.password);
}

}


