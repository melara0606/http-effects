import { Usuario } from 'src/app/models/usuario';
import * as UsuarioActions from '../actions/Usuarios.actions';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const InitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export const objectError = (state: any, action: any) => ({
  ...state,
  loading: false,
  loaded: false,
  error: {
    status: action.payload.status,
    message: action.payload.message,
    url: action.payload.url
  }
});

export function usuariosReducers(state = InitialState, action: UsuarioActions.UsuarioActionsUnion): UsuariosState {
  switch (action.type) {
    case UsuarioActions.UsuariosActions.Cargar_Usuarios: {
      return {
        ...state,
        loading: true,
      };
    }

    case UsuarioActions.UsuariosActions.Cargar_Usuarios_Success: {
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.usuarios]
      };
    }

    case UsuarioActions.UsuariosActions.Cargar_Usuarios_Fails: {
      return objectError(state, action);
    }

    default:
      return state;
  }
}
