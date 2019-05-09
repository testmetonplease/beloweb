import { BrowserModule, TransferState } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { syncReducers, AppState, resetOnLogout, DEV_REDUCERS, CustomSerializer } from './reducers';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from './effects/router';
import { UserEffects } from './user/user.effects';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';

export const metaReducers: MetaReducer<AppState>[] = !environment.production ?
  [...DEV_REDUCERS, resetOnLogout] : [resetOnLogout];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    EffectsModule.forRoot([
      RouterEffects,
      UserEffects
    ]),
    StoreModule.forRoot(syncReducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router' // name of reducer key
    }),
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer },
    UserService,
    TransferState],
  bootstrap: [AppComponent]
})
export class AppModule { }
