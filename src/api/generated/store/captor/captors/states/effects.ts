/* tslint:disable:max-line-length */
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
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import {CaptorService} from '../../../../controllers/Captor';
import * as actions from './actions';

@Injectable()
export class CaptorsEffects {
  @Effect()
  Captors = this.storeActions.pipe(
    ofType<actions.Start>(actions.Actions.START),
    switchMap((action: actions.Start) => this.captorService.captors(action.payload)
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private captorService: CaptorService,
  ) {}
}
