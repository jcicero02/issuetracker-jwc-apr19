import { Action } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface DeveloperEntity {
  id: string;
  firstName: string;
  lastName: string;
  team: string;
}


export interface State extends EntityState<DeveloperEntity> {

}

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      firstName: 'Bob',
      lastName: 'Smith',
      team: 'ERO'
    },
    2: {
      id: '2',
      firstName: 'Sue',
      lastName: 'Jones',
      team: 'Claims'
    }
  }
};


export const adapter = createEntityAdapter<DeveloperEntity>();

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
