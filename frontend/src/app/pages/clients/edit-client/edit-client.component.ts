import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client, ClientEditResponse } from 'src/app/interfaces/clients';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent {

  clientId!: any;
  client!: Client;
  originalClient!: Client;
  //Lista de errores
  errors: any = [];

  constructor(private route: ActivatedRoute, private clientService: ClientService) {}

  ngOnInit(){
    this.clientId = this.route.snapshot.paramMap.get('id');
    
    this.clientService.getClient(this.clientId).subscribe((data) => {
      this.client = data.client;
      this.originalClient = { ...this.client }; 
    })

  }

  updateClient(){
    
    var inputData: any = {};

    if (this.client.name !== this.originalClient.name) {
      inputData.name = this.client.name;
    }

    if (this.client.last_name !== this.originalClient.last_name) {
      inputData.last_name = this.client.last_name;
    }

    if (this.client.email !== this.originalClient.email) {
      inputData.email = this.client.email;
    }

    if (this.client.points !== this.originalClient.points) {
      inputData.points = this.client.points;
    }

    if (Object.keys(inputData).length === 0) {
      // No hay cambios, no necesitas realizar la actualización
      alert("No se realizaron cambios.");
      return;
    }

    console.log(inputData);
    this.clientService.updateClient(inputData, this.clientId).subscribe({
      next: () => {
        alert('Se ha actualizado la información del cliente correctamente.');
      },
      error: (err) => {
        this.errors = err.error.errors;
      }
    });
  }
}
