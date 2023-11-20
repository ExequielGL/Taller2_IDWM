import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router:Router){}
  credentialsInvalid: boolean = false;
  //Inicialización de los valores del formulario
  loginForm= new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required)
  })

    //Lista de errores
    errors: any = [];

    handleLoginFormSubmit():void{
      if(this.loginForm.valid){
        const formData = this.loginForm.value;
        const dataToSend = {
          username: formData.username || '',
          password: formData.password || ''
        };
      
        this.authService.login(dataToSend).subscribe({
          next: (response) => {
            const token = response.token;
            if (token && token.split('.').length === 3) {
              localStorage.setItem('token', token);
              this.router.navigate(['/clients']);
            } else {
              this.credentialsInvalid = true;
              this.loginForm.reset();
            }
          },
          error: (err) => {
            this.errors = err.error.errors;
            console.error('Error durante el inicio de sesión', this.errors);
          }
        });
      }else{
        this.loginForm.markAllAsTouched();
      }
    }
}
