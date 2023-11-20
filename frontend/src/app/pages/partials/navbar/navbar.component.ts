import { Component, inject} from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public clientService: ClientService) {}

  //Función para eliminar el token del almacenamiento local.
  onClickLogout() {
    localStorage.removeItem('token');
  }
}
