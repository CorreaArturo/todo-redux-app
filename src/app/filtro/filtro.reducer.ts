import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';
import { filtrosValidos } from './filtro.actions';

export const initialState:filtrosValidos = 'todos';

const _filtroReducer = createReducer(
    initialState,
    on(actions.setFiltro, (state:filtrosValidos, {filtro}) => filtro),
  );

  export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
  }  