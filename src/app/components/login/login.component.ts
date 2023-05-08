import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = 'mpinero';
  password: string = 'mpinero';

  constructor(private authService: AuthService) { }

  login() {
    const isAuthenticated = this.authService.login(this.username, this.password);
    if (isAuthenticated) {
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Credenciales inválidas');
    }
  }

}
