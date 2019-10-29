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

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface CaptorsState {
  data: __model.Captor | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialCaptorsState: CaptorsState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Captor_Captors';
export const getCaptorsStateSelector = createFeatureSelector<CaptorsState>(selectorName);

export function CaptorsReducer(
  state: CaptorsState = initialCaptorsState,
  action: actions.CaptorsAction): CaptorsState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
