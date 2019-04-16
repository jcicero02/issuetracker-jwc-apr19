import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import * as developerActions from '../actions/developer.actions';
import { switchMap, map } from 'rxjs/operators';
import { DeveloperEntity } from '../reducers/developers.reducer';




@Injectable()
export class DeveloperEffects {
  readonly uri = 'http://localhost:3000/developers';

  @Effect() loadDevelopers$ = this.actions$
    .pipe(
      ofType(developerActions.LOAD_DEVELOPERS),
      switchMap(() => this.http.get<{ data: DeveloperEntity[] }>(this.uri)
        .pipe(
          map(r => r.data),
          map(d => new developerActions.LoadedDevelopersSuccessfully(d))
        ))
    );

  constructor(private actions$: Actions, private http: HttpClient) {

  }
}
