import * as fromDevelopers from './developers.reducer';
import * as fromSorters from './sorters.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { DeveloperListItem } from '../models';
export const featureName = 'issueFeature';

export interface State {
  developers: fromDevelopers.State;
  sorters: fromSorters.State;
}

export const reducers: ActionReducerMap<State> = {
  developers: fromDevelopers.reducer,
  sorters: fromSorters.reducer
};


// 1 Feature Reducer

export const _selectIssuesFeature = createFeatureSelector<State>(featureName);

// 2 A Reducer per/branch

export const _selectDevelopersBranch = createSelector(_selectIssuesFeature, b => b.developers);
export const _selectSorterBranch = createSelector(_selectIssuesFeature, b => b.sorters);

// 3 Any helpers you might need
export const { selectAll: _selectDeveloperEntities } = fromDevelopers.adapter.getSelectors(_selectDevelopersBranch);
export const _selectDeveloperListItemsUnsorted = createSelector(_selectDeveloperEntities, devs => devs as DeveloperListItem[]);

// 4 The reducers you slect from in your components


export const selectSortDeveloperListBy = createSelector(_selectSorterBranch, b => b.sortDeveloperBy);
// TODO: DeveloperListItem[]
export const selectDeveloperListItems = createSelector(
  _selectDeveloperListItemsUnsorted,
  selectSortDeveloperListBy,
  (list, sortKey) => {
    return [...list.sort((lhs: DeveloperListItem, rhs: DeveloperListItem) => {
      if (lhs[sortKey] < rhs[sortKey]) {
        return -1;
      }
      if (lhs[sortKey] > rhs[sortKey]) {
        return 1;
      }
      return 0;
    })];
  });


