import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

export const noAuthGuard = () => {

  const router = inject(Router);
  
  if (localStorage.getItem('token') && !jwtHelper.isTokenExpired(localStorage.getItem('token'))) {
    // Si el token existe y no ha expirado, no permite el acceso a la ruta
    router.navigate(['/clients'])
    return false;
  } else {
    // Si el token no existe o ha expirado, permite el acceso a la ruta
    return true;
  }
};

