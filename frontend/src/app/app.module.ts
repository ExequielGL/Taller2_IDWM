import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterClientComponent } from './pages/clients/register-client/register-client.component';
import { ClientsComponent } from './pages/clients/show-client/show-client.component';
import { NavbarComponent } from './pages/partials/navbar/navbar.component';
import { EditClientComponent } from './pages/clients/edit-client/edit-client.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientsComponent,
    NavbarComponent,
    RegisterClientComponent,
    EditClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
