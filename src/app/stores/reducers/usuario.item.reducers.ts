import { Usuario } from 'src/app/models/usuario';
import { objectError } from './usuario.reducers';
import * as UsuarioActions from '../actions/Usuarios.actions';

export interface UsuarioState {
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const InitialItemState: UsuarioState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function usuarioReducers(state = InitialItemState, action: UsuarioActions.UsuarioItemActionsUnion): UsuarioState {
  switch (action.type) {
    case UsuarioActions.UsuariosActions.Cargar_Usuario: {
      return {
        ...state,
        loading: true,
      };
    }

    case UsuarioActions.UsuariosActions.Cargar_Usuario_Success: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: { ...action.usuario }
      };
    }

    case UsuarioActions.UsuariosActions.Cargar_Usuario_Fails: {
      return {
        ...objectError(state, action),
        user: null
      };
    }

    default:
      return state;
  }
}
