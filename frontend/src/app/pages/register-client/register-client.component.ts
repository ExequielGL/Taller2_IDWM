import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent {

  constructor( private clientService: ClientService) {}

  rut_or_dni!: string
  name: string = ''
  last_name: string = ''
  email: string = ''
  points: number = 0

  saveClient(){

    var inputData = {
      rut_or_dni: this.rut_or_dni,
      name: this.name,
      las_name: this.last_name,
      email: this.email,
      points: this.points
    }
      
    this.clientService.saveClient(inputData).subscribe({ 
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log('Error inesperado: ', err);
      }
    });
  }
}
