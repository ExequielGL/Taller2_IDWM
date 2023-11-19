import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent {

  constructor( private clientService: ClientService) {}

  //Inicialización de los valores del formulario
  id!: number;
  rut_or_dni!: string
  name: string = ''
  last_name: string = ''
  email: string = ''
  points: number = 0

  //Lista de errores
  errors: any = [];

  //Funcion para enviar la información al backend y recibir una respuesta
  saveClient(){

    var inputData = {
      id: this.id,
      rut_or_dni: this.rut_or_dni,
      name: this.name,
      last_name: this.last_name,
      email: this.email,
      points: this.points
    }
      
    this.clientService.saveClient(inputData).subscribe({ 
      next: (response) => {
        console.log(response);
        alert();
        this.rut_or_dni = '';
        this.name ='';
        this.last_name = '';
        this.email = '';
        this.points = 0;
      },
      error: (err) => {
        this.errors = err.error.errors;
        console.log('Error: ', this.errors);
      }
    });
  }
}
