import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

//Función que verifica que el usuario haya iniciado sesión o el token que contiene es válido.
export const authGuard = () => {

  const router = inject(Router);
  
  if (localStorage.getItem('token') && !jwtHelper.isTokenExpired(localStorage.getItem('token'))) {
    // Si el token existe y no ha expirado, permite el acceso a la ruta
    return true;
  } else {
    // Si el token no existe o ha expirado, redirige al usuario a la página de inicio de sesión
    router.navigate(['/login'])
    return false;
  }
};

