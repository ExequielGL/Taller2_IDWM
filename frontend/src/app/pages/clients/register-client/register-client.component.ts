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

  changeTextBtn(event:any){
    event.target.innerText = "Enviando...";
    if(!this.registerForm.valid){
      event.target.innerText = "Enviar";
    }
  }

  //Funcion para enviar la información al backend y recibir una respuesta
  saveClient(){
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
      this.registerForm.markAllAsTouched();
    }
  }
}
