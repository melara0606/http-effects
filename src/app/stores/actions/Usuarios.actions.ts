import { Usuario } from '../../models/usuario';
import { Action } from '@ngrx/store';

export enum UsuariosActions {
  Cargar_Usuarios = '[Usuario] Cargar el usuario',
  Cargar_Usuarios_Success = '[Usuario] Cargar el usuario correcto',
  Cargar_Usuarios_Fails = '[Usuario] Cargar el usuario fallo',
}

export class CargarUsuarios implements Action {
  readonly type = UsuariosActions.Cargar_Usuarios;
}

export class CargarUsuariosSuccess implements Action {
  readonly type = UsuariosActions.Cargar_Usuarios_Success;
  public constructor(public usuarios: Usuario[]) { }
}

export class CargarUsuariosFails implements Action {
  readonly type = UsuariosActions.Cargar_Usuarios_Fails;
  public constructor(public payload: any) { }
}

export type UsuarioActionsUnion = CargarUsuarios | CargarUsuariosSuccess | CargarUsuariosFails;
