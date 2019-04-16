import { Actions, Effect, ofType } from '@ngrx/effects';
import * as appActions from '../../../actions/app.actions';
import { concatMap } from 'rxjs/operators';
import { LoadDevelopers } from '../actions/developer.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class AppStartUpEffect {

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
