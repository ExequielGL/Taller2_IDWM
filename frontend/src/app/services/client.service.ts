import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/login';
import { Client, ClientEditResponse, ClientShowResponse } from '../interfaces/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  saveClient(inputData: Client){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.post<LoginResponse>(`http://localhost:8000/api/register-clients`, inputData, {headers});
  }

  getClients(){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.get<ClientShowResponse>(`http://localhost:8000/api/clients`, {headers});
  }

  getClient(clientId: number){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.get<ClientEditResponse>(`http://localhost:8000/api/clients/${clientId}/edit`, {headers});
  }

  updateClient(inputData: object, clientId: number){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.put(`http://localhost:8000/api/clients/${clientId}/edit`, inputData, {headers});
  }

  destroyClient(clientId:number){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.delete(`http://localhost:8000/api/clients/${clientId}`, {headers});
  }

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
