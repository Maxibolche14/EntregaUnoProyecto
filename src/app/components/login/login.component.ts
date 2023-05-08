import { Component } from '@angular/core';
import { AuthService, LoginService } from '../login_Service/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  emailControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot);
  }


  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.value as LoginService)
    }
  }
}