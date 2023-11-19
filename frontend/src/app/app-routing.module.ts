import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterClientComponent } from './pages/register-client/register-client.component';
import { ClientsComponent } from './pages/clients/clients.component';

const routes: Routes = [
  {path: '', title: 'Login page', component: LoginComponent },
  {path:'register-client', title: 'Register page', component: RegisterClientComponent},
  {path:'clients', title: 'Clients page', component: ClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
