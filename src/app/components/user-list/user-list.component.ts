/*import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/Usuario-service.service';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-Usuario-list',
  templateUrl: './Usuario-list.component.html',
  styleUrls: ['./Usuario-list.component.css']

})
export class UsuarioListComponent implements OnInit {
  Usuarios$: Observable<Usuario[]> = of([]);
  filteredUsuarios$: Observable<Usuario[]> = of([]);;
  searchText = new FormControl('');

  //nstructor(private UsuarioService: UsuarioService) { }

  ngOnInit() {
    this.Usuarios$ = this.UsuarioService.getUsuarios();

    this.filteredUsuarios$ = this.searchText.valueChanges.pipe(
      debounceTime(300),
      filter(searchText => searchText !== null), // Filtrar los valores nulos
      map(searchText => searchText as string), // Convertir a tipo string
      distinctUntilChanged(),
      switchMap(searchText => this.filterUsuarios(searchText))
    );
  }

  filterUsuarios(searchText: string): Observable<Usuario[]> {
    return this.Usuarios$.pipe(
      map(Usuarios => Usuarios.filter(Usuario => Usuario.nombre.toLowerCase().includes(searchText.toLowerCase())))
    );
  }

  loadUsuarios() {
    this.Usuarios$ = this.UsuarioService.getUsuarios();
  }
}*/