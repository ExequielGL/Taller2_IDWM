import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent {

  constructor( private clientService: ClientService, private router:Router) {}

  //Inicialización de los valores del formulario
  registerForm= new FormGroup({
    rut_or_dni: new FormControl<string>('', Validators.required),
    name: new FormControl<string>('', Validators.required),
    last_name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    points: new FormControl<number>(0, [Validators.required, Validators.min(0)])
  })

  //Lista de errores
  errors: any = [];

  //Función para manejar el envio del formulario de inicio de sesión
  handleRegisterFormSubmit(){
    //Se valida que el formulario sea válido
    if(this.registerForm.valid){
      const formData = this.registerForm.value;
      const dataToSend = {
        rut_or_dni: formData.rut_or_dni || '',
        name: formData.name || '',
        last_name: formData.last_name || '',
        email: formData.email || '',
        points: formData.points || 0,
      };
      
      this.clientService.saveClient(dataToSend).subscribe({
        next: () => {
          alert('Se ha creado el cliente exitosamente');
          this.router.navigate(['/clients']);
          
        },
        error: (err) => {
          this.errors = err.error.errors;
          console.error('Error durante el registro', this.errors);
        }
      });
    }else{
      //Si no es válido marca todas las casillas como "tocadas" para que salten las validaciones
      this.registerForm.markAllAsTouched();
    }
  }
}
