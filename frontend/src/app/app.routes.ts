import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path:'',
        title: 'Login page',
        component: LoginComponent
    },
    {
        path:'register',
        title: 'Register page',
        component: RegisterComponent
    },
    {
        path:'login',
        title: 'Bienvenido!',
        component: LoginComponent
    },
];
