import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import * as developerActions from '../actions/developer.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DeveloperEntity } from '../reducers/developers.reducer';




@Injectable()
export class DeveloperEffects {
  readonly uri = 'http://localhost:3000/developers';

  @Effect() addDeveloper$ = this.actions$
    .pipe(
      ofType(developerActions.ADDED_DEVELOPER),
      map(a => a as developerActions.AddedDeveloper),
      switchMap(orginalAction => this.http.post<DeveloperEntity>(this.uri, orginalAction.payload)
        .pipe(
          map(developerFromServer => new developerActions.SuccessfullyAddedDeveloper(orginalAction.payload.id, developerFromServer)),
          catchError(r =>
            of(new developerActions.FailedAddedDeveloper('Cannot Add That Developer', orginalAction.payload))
          )
        )
      )
    );

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
