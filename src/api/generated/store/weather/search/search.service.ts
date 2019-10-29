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

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {WeatherService} from '../../../controllers/Weather';

@Injectable()
export class SearchFormService {
  form: FormGroup;
  constructor(
    private weatherService: WeatherService,
  ) {
    this.form = new FormGroup({
      start_date: new FormControl(undefined, []),
      end_date: new FormControl(undefined, []),
      iata: new FormControl(undefined, []),
      type: new FormControl(undefined, []),
      moyenne: new FormControl(undefined, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.weatherService.search(data);
  }
}
