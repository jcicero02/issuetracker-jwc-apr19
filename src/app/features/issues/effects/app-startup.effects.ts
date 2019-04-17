import { Actions, Effect, ofType } from '@ngrx/effects';
import * as appActions from '../../../actions/app.actions';
import * as developerActions from '../actions/developer.actions'
import { concatMap, map } from 'rxjs/operators';
import { LoadDevelopers } from '../actions/developer.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class AppStartUpEffect {


  @Effect() addingADeveloperDoneBlewUp$ = this.actions$
    .pipe(
      ofType(developerActions.ADDED_DEVELOPER_FAILURE),
      map(a => a as developerActions.FailedAddedDeveloper),
      map(a => new appActions.ApplicationError(a.errorMessage, 'issues'))
    );

  @Effect() startup$ = this.actions$
    .pipe(
      ofType(appActions.APP_START),
      concatMap(() => [
        new LoadDevelopers()
      ])
    );
  constructor(private actions$: Actions) {

  }
}
