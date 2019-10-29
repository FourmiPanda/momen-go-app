/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Get weather data of airports
 * 1.0.0
 * MomenGo API
 * http://localhost/terms/
 * apiteam@momengo.io
 * Apache 2.0
 * http://www.apache.org/licenses/LICENSE-2.0.html
 * localhost/api
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {SearchParams} from '../../../../controllers/Weather';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Weather search] Start',
  SUCCESS = '[Weather search] Success',
  ERROR = '[Weather search] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: SearchParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Measure[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type SearchAction = Start | Success | Error;
