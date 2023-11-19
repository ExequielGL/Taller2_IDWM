import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router:Router){}

  loginForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', Validators.required)
  })

  handleLoginFormSubmit():void{
    const formData = this.loginForm.value;
    const dataToSend = {
      username: formData.username || '',
      password: formData.password || ''
    };

    this.authService.login(dataToSend).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        console.log("TOKEN: ", response.token);
      },
      error: (error) => {
        console.error('Error de inicio de sesión', error);
      }
    });
  }
}
