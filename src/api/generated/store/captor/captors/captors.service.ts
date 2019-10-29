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
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CaptorService} from '../../../controllers/Captor';

@Injectable()
export class CaptorsFormService {
  form: FormGroup;
  constructor(
    private captorService: CaptorService,
  ) {
    this.form = new FormGroup({
      captorId: new FormControl(undefined, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.captorService.captors(data);
  }
}
