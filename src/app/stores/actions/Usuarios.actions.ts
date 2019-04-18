import { Usuario } from '../../models/usuario';
import { Action } from '@ngrx/store';

export enum UsuariosActions {
  Cargar_Usuarios = '[Usuarios] Cargar los usuarios',
  Cargar_Usuarios_Success = '[Usuarios] Cargar los usuarios correcto',
  Cargar_Usuarios_Fails = '[Usuarios] Cargar los usuarios fallo',

  // Para el usuario
  Cargar_Usuario = '[Usuario] Cargar el usuario',
  Cargar_Usuario_Success = '[Usuario] Cargar el usuario correcto',
  Cargar_Usuario_Fails = '[Usuario] Cargar el usuario fallo',
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

// Para el usuario
export class CargarUsuario implements Action {
  readonly type = UsuariosActions.Cargar_Usuario;
  public constructor(public id: string) { }
}

export class CargarUsuarioSuccess implements Action {
  readonly type = UsuariosActions.Cargar_Usuario_Success;
  public constructor(public usuario: Usuario) { }
}

export class CargarUsuarioFails implements Action {
  readonly type = UsuariosActions.Cargar_Usuario_Fails;
  public constructor(public payload: any) { }
}

export type UsuarioActionsUnion = CargarUsuarios |
                                  CargarUsuariosSuccess |
                                  CargarUsuariosFails;

export type UsuarioItemActionsUnion = CargarUsuario |
                                      CargarUsuarioSuccess |
                                      CargarUsuarioFails;
