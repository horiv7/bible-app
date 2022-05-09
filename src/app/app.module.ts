import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BookListModule } from './bookList/bookList.module';
import { BookModule } from './book/book.module';
import { HeaderModule } from './shared/modules/header/header..module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    BookListModule,
    BookModule,
    AppRoutingModule,
    HeaderModule,
    StoreModule.forRoot({}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
