import { Component, inject} from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public clientService: ClientService) {}

  onClickLogout() {
    localStorage.removeItem('token');
  }
}
