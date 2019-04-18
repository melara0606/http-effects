import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AppState } from 'src/app/stores/app.state';
import { CargarUsuarios } from '../../stores/actions/Usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  public error: any;
  public users: Usuario[];
  public loading: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('usuarios').subscribe(usuarios => {
      this.users = usuarios.users;
      this.error = usuarios.error;
      this.loading = usuarios.loading;
    });
  }

  ngOnInit() {
    this.store.dispatch(
      new CargarUsuarios
    );
  }
}
