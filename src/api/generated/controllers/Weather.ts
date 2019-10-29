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

import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import * as __model from '../model';

export interface SearchParams {
  /** Start date */
  start_date?: string;
  /** End date */
  end_date?: string;
  /** IATA code */
  iata?: string;
  /** Type of measurement */
  type?: TypeSearchParamsEnum;
  /** Get the average of measurement */
  moyenne?: boolean;
}

export type TypeSearchParamsEnum =
  'temperature' |
  'pressure' |
  'wind';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {
  }

  /**
   * Returns a list of measure that match the search criteria.
   * Multiple status values can be provided with comma separated strings
   * http://localhost/swagger/swagger-ui.html#!/Weather/search
   */
  search(params: SearchParams): Observable<__model.Measure[]> {
    const queryParamBase = {
      start_date: params.start_date,
      end_date: params.end_date,
      iata: params.iata,
      type: params.type,
      moyenne: params.moyenne,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) {
        if (typeof value === 'string') {
          queryParams = queryParams.set(key, value);
        } else if (Array.isArray(value)) {
          value.forEach(v => queryParams = queryParams.append(key, v));
        } else {
          queryParams = queryParams.set(key, JSON.stringify(value));
        }
      }
    });

    return this.http.get<__model.Measure[]>(`http://localhost:8080/api/search`, {params: queryParams});
  }
}
