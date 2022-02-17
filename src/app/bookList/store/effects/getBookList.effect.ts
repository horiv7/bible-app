import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { GetBookListService } from '../../services/getBookList.service';
import { BookCardInterface } from '../../types/bookCard.Interface';
import {
  getBookListAction,
  getBookListFailureAction,
  getBookListSuccessAction,
} from '../actions/getBookList.action';

@Injectable()
export class GetBookListEffect {
  getBookList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBookListAction),
      switchMap(({ slug }) => {
        return this.getBookListService.getBookList(slug).pipe(
          map((bookList: BookCardInterface[]) => {
            return getBookListSuccessAction({ bookList });
          }),
          catchError(() => {
            return of(getBookListFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private getBookListService: GetBookListService
  ) {}
}
