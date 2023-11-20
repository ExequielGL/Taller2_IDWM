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
  searchTerm: string = '';

  constructor(private clientsService: ClientService) {}

  ngOnInit() {
    this.getClients()
  }

  getClients(){
    this.clientsService.getClients().subscribe(data => {
      this.clients = data.clients;
    });
  }

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
