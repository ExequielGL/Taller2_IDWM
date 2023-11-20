import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm, LoginResponse } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  //Función que envia las credenciales a la api para iniciar sesión
  login(credentials: LoginForm) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }
}
