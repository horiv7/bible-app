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
import { ChapterComponent } from './components/chapter/chapter.component';
import { GetChapterService } from './services/getChapter.service';
import { GetChapterEffect } from './store/effects/getChapter.effect';

import { reducers } from './store/reducer';

const routes = [
  {
    path: ':part/:book/:chapter',
    component: ChapterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    EffectsModule.forFeature([GetChapterEffect]),
    StoreModule.forFeature('chapter', reducers),
    FlexLayoutModule,
    LoadingModule,
    ErrorMessageModule,
    HeaderModule,
  ],
  declarations: [ChapterComponent],
  exports: [],
  providers: [GetChapterService],
})
export class ChapterModule {}
