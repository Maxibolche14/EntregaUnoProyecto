import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  login(username: string, password: string): boolean {
    // Aca implementar la lógica de autenticación
    // tengo que verificar si las credenciales son válidas y establece el estado de inicio de sesión

    if (username === 'usuario' && password === 'contraseña') {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    // Aca implementar la lógica de cierre de sesión
    // Restablece el estado de inicio de sesión
    this.isLoggedIn = false;
  }
}
