import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/login';
import { ClientEditResponse, ClientShowResponse, CreateClientType } from '../interfaces/clients';

import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  //Función para insertar un cliente en la base de datos
  saveClient(inputData: CreateClientType){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.post<LoginResponse>(`http://localhost:8000/api/clients/register`, inputData, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401 && error.error.message === 'invalid token'){
          alert('Sesión expirada, inicie sesión nuevamente.')
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
        throw error;
      })
    );
  }

  //Función para obtener todos los clientes de la base de datos
  getClients(){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.get<ClientShowResponse>(`http://localhost:8000/api/clients`, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401 && error.error.message === 'invalid token'){
          alert('Sesión expirada, inicie sesión nuevamente.')
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
        throw error;
      })
    );
  }

  //Función para obtener solo un cliente de la base de datos
  getClient(clientId: number){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.get<ClientEditResponse>(`http://localhost:8000/api/clients/${clientId}/edit`, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401 && error.error.message === 'invalid token'){
          alert('Sesión expirada, inicie sesión nuevamente.')
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
        throw error;
      })
    );
  }
  
  //Función para actualizar un cliente de la base de datos
  updateClient(inputData: object, clientId: number){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.put(`http://localhost:8000/api/clients/${clientId}/edit`, inputData, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401 && error.error.message === 'invalid token'){
          alert('Sesión expirada, inicie sesión nuevamente.')
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
        throw error;
      })
    );
  }

  //Función para eliminar un cliente de la base de datos
  destroyClient(clientId:number){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.delete(`http://localhost:8000/api/clients/${clientId}`, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401 && error.error.message === 'invalid token'){
          alert('Sesión expirada, inicie sesión nuevamente.')
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
        throw error;
      })
    );
  }

  //Función para verificar si se esta logeado o no
  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
