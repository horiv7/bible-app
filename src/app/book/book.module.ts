import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage..module';
import { HeaderModule } from '../shared/modules/header/header..module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { BookComponent } from './components/book/book.component';
 import { GetBookService } from './services/getBook.service';
import { GetBookEffect } from './store/effects/getBook.effect';

import { reducers } from './store/reducer';

const routes = [
  {
    path: ':part/:book',
    component: BookComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    EffectsModule.forFeature([GetBookEffect]),
    StoreModule.forFeature('book', reducers),
    FlexLayoutModule,
    LoadingModule,
    ErrorMessageModule,
    HeaderModule,
  ],
  declarations: [BookComponent],
  exports: [],
  providers: [GetBookService],
})
export class BookModule {}
