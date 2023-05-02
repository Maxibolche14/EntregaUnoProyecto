import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): Observable<User[]> {
    // Aquí simulamos la obtención de la lista de usuarios desde algún servicio o API
    const users: User[] = [
      { id: 1, name: 'Vanessa' },
      { id: 2, name: 'Maria Paz' },
      { id: 3, name: 'Maxi' },
      { id: 4, name: 'Miriam' }
    ];

    return of(users);
  }
}