import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterForm} from "../models/register-form";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  register(registerForm: RegisterForm) {
    return this.http.post(`${this.apiUrl}/api/Auth/register`, registerForm);
  }
}
