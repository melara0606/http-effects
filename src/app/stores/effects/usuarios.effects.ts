import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

// Actions
import * as usuarioActions from '../actions/Usuarios.actions';
import { UsuarioService } from './../../services/usuario.service';

// { UsuariosActions, CargarUsuariosSuccess, CargarUsuariosFails }

@Injectable()
export class UsuarioEffects {
  public constructor(
    private actions$: Actions,
    public usuarioService: UsuarioService
  ) { }

  @Effect()
  cargarUsuarios$ = this.actions$.pipe(
    ofType(usuarioActions.UsuariosActions.Cargar_Usuarios),
    switchMap(() => this.usuarioService.getUsers().pipe(
      map((users) => new usuarioActions.CargarUsuariosSuccess(users)),
      catchError(error => of(new usuarioActions.CargarUsuariosFails(error))))
    )
  );
}
