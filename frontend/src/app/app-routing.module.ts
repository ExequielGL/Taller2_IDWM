import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterClientComponent } from './pages/clients/register-client/register-client.component';
import { ClientsComponent } from './pages/clients/show-client/show-client.component';
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';
import { EditClientComponent } from './pages/clients/edit-client/edit-client.component';

const routes: Routes = [
  {path:'login', title: 'Iniciar sesión', component: LoginComponent, canActivate: [noAuthGuard]},
  {path:'clients', title: 'Ver clientes', component: ClientsComponent, canActivate: [authGuard]},
  {path:'clients/register', title: 'Añadir cliente', component: RegisterClientComponent, canActivate: [authGuard]},
  {path:'clients/:id/edit', title: 'Editar cliente', component: EditClientComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
