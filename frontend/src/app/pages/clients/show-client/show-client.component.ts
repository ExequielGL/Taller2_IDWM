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
}
