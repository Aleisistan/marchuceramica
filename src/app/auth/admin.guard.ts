import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Simula una verificación de autenticación para admin
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (isAdmin) {
      return true; // Permitir acceso
    }

    // Redirige al usuario si no es admin
    alert('Acceso restringido: Solo para administradores.');
    this.router.navigate(['/']);
    return false;
  }
}
