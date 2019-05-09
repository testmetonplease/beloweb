
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';

import { DEV_REDUCERS, syncReducers, resetOnLogout, AppState } from '../store/reducers';
import { RouterEffects } from '../store/effects/router';
import { UserEffects } from '../user/user.effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export const metaReducers: MetaReducer<AppState>[] = !environment.production ?
  [...DEV_REDUCERS, resetOnLogout] : [resetOnLogout];

export const CORE_IMPORTS = [
  HttpClientModule,
  EffectsModule.forRoot([
    RouterEffects,
    UserEffects
    ]),
  StoreModule.forRoot(syncReducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router'
  }),
  // 3rd party
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
];


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

