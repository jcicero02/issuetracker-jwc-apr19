import * as appActions from '../actions/app.actions';



export interface State {
  pendingError: string;
  hasError: boolean;

}

const initialState: State = {
  pendingError: null,
  hasError: false
}

export function reducer(state: State = initialState, action: appActions.AppActions): State {
  switch (action.type) {
    case appActions.APPLICATION_ERROR: {
      return {
        hasError: true,
        pendingError: action.message
      };
    }
    default: {
      return state;
    }
  }
}
