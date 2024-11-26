import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterForm} from "../models/register-form";
import {environment} from "../../../environments/environment.development";
import {LoginForm} from "../models/login-form";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  register(registerForm: RegisterForm) {

    return this.http.post(`${environment.apiUrl}/Auth/Register`, registerForm);
  }

  login(loginForm: LoginForm) {
    return this.http.post(`${environment.apiUrl}/Auth/Login`, loginForm);
  }
}
