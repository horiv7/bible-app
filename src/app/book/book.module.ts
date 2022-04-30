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
import { BookContainerComponent } from './components/bookContainer/bookContainer.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { GetBookService } from './services/getBook.service';
import { GetChapterService } from './services/getChapter.service';
import { GetBookEffect } from './store/effects/getBook.effect';
import { GetChapterEffect } from './store/effects/getChapter.effect';

import { reducers } from './store/reducer';

const routes = [
  {
    path: ':part/:book',
    component: BookContainerComponent,
    children: [
      {
        path: '',
        component: BookComponent,
      },
      {
        path: ':chapterId',
        component: ChapterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    EffectsModule.forFeature([GetBookEffect,GetChapterEffect]),
    StoreModule.forFeature('book', reducers),
    FlexLayoutModule,
    LoadingModule,
    ErrorMessageModule,
    HeaderModule,
  ],
  declarations: [BookComponent, BookContainerComponent,ChapterComponent],
  exports: [],
  providers: [GetBookService, GetChapterService],
})
export class BookModule {}
