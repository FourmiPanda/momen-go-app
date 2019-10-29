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

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import * as __model from '../model';

export interface CaptorsParams {
  /** ID of captor to return */
  captorId: string;
}

@Injectable()
export class CaptorService {
  constructor(private http: HttpClient) {
  }

  /**
   * Find captor by ID
   * Returns a single captor
   * http://localhost/swagger/swagger-ui.html#!/Captor/getCaptorById
   */
  captors(params: CaptorsParams): Observable<__model.Captor> {
    const pathParams = {
      captorId: params.captorId,
    };
    return this.http.get<__model.Captor>(`http://localhost:8080/api/captors/${pathParams.captorId}`);
  }
}
