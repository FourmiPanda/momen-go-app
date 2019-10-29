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

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {CaptorService} from '../../../controllers/Captor';
import {FormsSharedModule} from '../../forms-shared.module';
import {CaptorsFormService} from './captors.service';

import {CaptorsEffects} from './states/effects';
import {CaptorsReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, CaptorsReducer),
    NgrxEffectsModule.forFeature([CaptorsEffects]),
  ],
  providers: [
    CaptorService,
    CaptorsFormService,
  ],
})
export class CaptorsModule {}
