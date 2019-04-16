import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectSortDeveloperListBy } from '../../reducers';
import { DeveloperListSorted } from '../../actions/sorters.actions';
import { NameSortKey } from '../../reducers/sorters.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-developer-list-sorter',
  templateUrl: './developer-list-sorter.component.html',
  styleUrls: ['./developer-list-sorter.component.css']
})
export class DeveloperListSorterComponent implements OnInit {

  constructor(private store: Store<State>) { }

  sortKey$: Observable<NameSortKey>;
  ngOnInit() {
    this.sortKey$ = this.store.select(selectSortDeveloperListBy);
  }

  sortByFirstName() {
    this.store.dispatch(new DeveloperListSorted('firstName'));
  }

  sortByLastName() {
    this.store.dispatch(new DeveloperListSorted('lastName'));
  }

}
