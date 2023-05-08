import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadingService } from '../services/loading.service';

export interface LoginService {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authUser$ = new BehaviorSubject<Usuario | null>(null);

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private loadingService: LoadingService,
  ) { }

  obtenerUsuarioAutenticado(): Observable<Usuario | null> {
    return this.authUser$.asObservable();
  }

  login(formValue:LoginService): void{


    this.httpClient.get(
      `${environment.apiBaseUrl}/usuarios`,
      {
        params: {
          ...formValue
        },
      }
      ).subscribe()
  }
}
