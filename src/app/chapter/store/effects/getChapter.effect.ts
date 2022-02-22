import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ChapterInterface } from 'src/app/chapter/types/chapter.Interface';

import { GetChapterService } from '../../services/getChapter.service';

import {
  getChapterAction,
  getChapterFailureAction,
  getChapterSuccessAction,
} from '../actions/getChapter.action';

@Injectable()
export class GetChapterEffect {
  getChapter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getChapterAction),
      switchMap(({ bookIdParam, chapterIdParam }) => {
        return this.getChapterService
          .getChapter(bookIdParam, chapterIdParam)
          .pipe(
            map((chapter: ChapterInterface) => {
              return getChapterSuccessAction({ chapter });
            }),
            catchError(() => {
              return of(getChapterFailureAction());
            })
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private getChapterService: GetChapterService
  ) {}
}
