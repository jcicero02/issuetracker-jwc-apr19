import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeveloperListItem } from '../../models';
import { Store } from '@ngrx/store';
import { State, selectDeveloperListItems } from '../../reducers';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {


  devs$: Observable<DeveloperListItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.devs$ = this.store.select(selectDeveloperListItems);
  }

}
