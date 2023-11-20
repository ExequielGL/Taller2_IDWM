import { Component, OnInit } from '@angular/core';
import { Client} from 'src/app/interfaces/clients';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ClientsComponent implements OnInit{

  clients!: Client[];
  searchTerm: string = ''; //Para la búsqueda

  constructor(private clientsService: ClientService) {}

  //Al iniciar la vista se cargan todos los clientes
  ngOnInit() {
    this.getClients()
  }

  //Función para llamar al servicio y obtener los clientes de la base de datos
  getClients(){
    this.clientsService.getClients().subscribe(data => {
      this.clients = data.clients;
    });
  }

  //Función para llamar al servicio y eliminar un cliente de la base de datos
  deleteClient(event:any , clientId:number ){

    if(confirm('Esta acción es irreversible, ¿Estás seguro de eliminar al cliente?.'))
    {
      event.target.innerText = "Eliminando...";
      this.clientsService.destroyClient(clientId).subscribe((res:any) => {
        this.getClients();
        alert('Se ha eliminado el cliente con éxito');
      });
    }
  }

  //Función que busca en tiempo real un cliente dentro de la tabla de clientes.
  search() {
    if (this.searchTerm.trim() !== '') {
      // Realiza la búsqueda utilizando el principio de la función contains
      this.clients = this.clients.filter(client =>
        client.rut_or_dni.includes(this.searchTerm) || client.email.includes(this.searchTerm)
      );
    } else {
      // Si el término de búsqueda está vacío, vuelve a cargar todos los clientes
      this.getClients();
    }
  }

}
