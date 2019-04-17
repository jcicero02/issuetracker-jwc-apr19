import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer, RouterReducerState } from "@ngrx/router-store";

import * as fromErrors from './errors.reducers';

export interface State {
  errors: fromErrors.State;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  errors: fromErrors.reducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const _selectErrorsBranch = (state: State) => state.errors;

export const selectHasError = createSelector(_selectErrorsBranch, b => b.hasError);
export const selectErrorMessage = createSelector(_selectErrorsBranch, b => b.pendingError);
