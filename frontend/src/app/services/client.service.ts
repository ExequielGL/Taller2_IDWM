import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  saveClient(inputData: object){

    return this.httpClient.post('http://localhost:8000/api/register-clients', inputData);
  }
}
