// import { Action } from '@ngrx/store';
import * as actions from '../actions/developer.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface DeveloperEntity {
  id: string;
  firstName: string;
  lastName: string;
  team: string;
}


export interface State extends EntityState<DeveloperEntity> {

}

export const adapter = createEntityAdapter<DeveloperEntity>();
const initialState: State = adapter.getInitialState();



export function reducer(state: State = initialState, action: actions.DeveloperActions): State {
  switch (action.type) {
    case actions.LOAD_DEVELOPERS_SUCCESS: {
      return adapter.addAll(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
