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

import { BookListComponent } from './bookList/bookList.component';
import { GetBookListService } from './services/getBookList.service';
import { GetBookListEffect } from './store/effects/getBookList.effect';
import { reducers } from './store/reducer';

const routes = [
  {
    path: ':part',
    component: BookListComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    EffectsModule.forFeature([GetBookListEffect]),
    StoreModule.forFeature('bookList', reducers),
    FlexLayoutModule,
    LoadingModule,
    ErrorMessageModule,
    HeaderModule,
  ],
  declarations: [BookListComponent],
  exports: [],
  providers: [GetBookListService],
})
export class BookListModule {}
