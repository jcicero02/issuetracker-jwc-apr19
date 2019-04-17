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
    case actions.ADDED_DEVELOPER_FAILURE: {
      return adapter.removeOne(action.developer.id, state);
    }
    case actions.ADDED_DEVELOPER_SUCCESS: {
      const tempState = adapter.removeOne(action.oldId, state);
      return adapter.addOne(action.developer, tempState);
    }
    case actions.ADDED_DEVELOPER: {
      return adapter.addOne(action.payload, state);
    }
    case actions.LOAD_DEVELOPERS_SUCCESS: {
      return adapter.addAll(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
