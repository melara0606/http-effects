import { Usuario } from './../../models/usuario';
import { CargarUsuario } from './../../stores/actions/Usuarios.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/stores/app.state';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  public user: Usuario;
  public error: any;
  public loading: boolean;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(new CargarUsuario(id));
    });

    this.store.select('usuario').subscribe(usuario => {
      this.user = usuario.user;
      this.error = usuario.error;
      this.loading = usuario.loading;
    });
  }
}
