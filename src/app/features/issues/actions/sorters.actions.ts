import { Action } from '@ngrx/store';
import { NameSortKey } from '../reducers/sorters.reducer';

export const SORT_DEVELOPERS_BY = '[issues] sort developers by';
export class DeveloperListSorted implements Action {
  readonly type = SORT_DEVELOPERS_BY;
  constructor(public sortKey: NameSortKey) { }
}


export type SortActions = DeveloperListSorted;
