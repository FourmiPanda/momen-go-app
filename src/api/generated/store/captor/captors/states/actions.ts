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
import {CaptorsParams} from '../../../../controllers/Captor';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Captor captors] Start',
  SUCCESS = '[Captor captors] Success',
  ERROR = '[Captor captors] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: CaptorsParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Captor) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type CaptorsAction = Start | Success | Error;
