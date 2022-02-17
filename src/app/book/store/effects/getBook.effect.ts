import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { BookInterface } from 'src/app/shared/types/book.Interface';

import { GetBookService } from '../../services/getBook.service';
import {
  getBookAction,
  getBookFailureAction,
  getBookSuccessAction,
} from '../actions/getBook.action';

@Injectable()
export class GetBookEffect {
  getBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBookAction),
      switchMap(({ params }) => {
        return this.getBookService.getBook(params).pipe(
          map((book: BookInterface) => {
            return getBookSuccessAction({ book });
          }),
          catchError(() => {
            return of(getBookFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private getBookService: GetBookService
  ) {}
}
