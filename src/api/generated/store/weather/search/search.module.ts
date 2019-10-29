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

import {WeatherService} from '../../../controllers/Weather';
import {FormsSharedModule} from '../../forms-shared.module';
import {SearchFormService} from './search.service';

import {SearchEffects} from './states/effects';
import {SearchReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, SearchReducer),
    NgrxEffectsModule.forFeature([SearchEffects]),
  ],
  providers: [
    WeatherService,
    SearchFormService,
  ],
})
export class SearchModule {}
