import { Action } from '@ngrx/store';

export const APP_START = '[application] start';
export class ApplicationStarted implements Action {
  readonly type = APP_START;
  constructor() { }
}

export type AppActions = ApplicationStarted;
