import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { GetChapterService } from '../../services/getChapter.service';

import { ChapterInterface } from '../../types/chapter.Interface';

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
      switchMap(({ chapterIdParam }) => {
        return this.getChapterService.getChapter(chapterIdParam).pipe(
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
