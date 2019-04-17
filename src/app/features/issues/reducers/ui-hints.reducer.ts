import { Action } from '@ngrx/store';
import * as fromDeveloperActions from '../actions/developer.actions';


export interface State {
  developersLoaded: boolean;
}

const initialState: State = {
  developersLoaded: false
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case fromDeveloperActions.LOAD_DEVELOPERS: {
      return {
        developersLoaded: false
      };
    }
    case fromDeveloperActions.LOAD_DEVELOPERS_SUCCESS: {
      return {
        developersLoaded: true
      };
    }
    default: {
      return state;
    }
  }
}
