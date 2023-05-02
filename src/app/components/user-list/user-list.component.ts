import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { User } from '../models/User';
import { UserService } from '../services/user-service.service';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']

})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> = of([]);
  filteredUsers$: Observable<User[]> = of([]);;
  searchText = new FormControl('');

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();

    this.filteredUsers$ = this.searchText.valueChanges.pipe(
      debounceTime(300),
      filter(searchText => searchText !== null), // Filtrar los valores nulos
      map(searchText => searchText as string), // Convertir a tipo string
      distinctUntilChanged(),
      switchMap(searchText => this.filterUsers(searchText))
    );
  }

  filterUsers(searchText: string): Observable<User[]> {
    return this.users$.pipe(
      map(users => users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase())))
    );
  }

  loadUsers() {
    this.users$ = this.userService.getUsers();
  }
}