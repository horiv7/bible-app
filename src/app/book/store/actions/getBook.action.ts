import { createAction, props } from '@ngrx/store';

import { BookInterface } from 'src/app/shared/types/book.Interface';
import { ActionTypes } from '../actionTypes';

export const getBookAction = createAction(
  ActionTypes.GET_BOOK,
  props<{ params: string }>()
);

export const getBookSuccessAction = createAction(
  ActionTypes.GET_BOOK_SUCCESS,
  props<{ book: BookInterface }>()
);

export const getBookFailureAction = createAction(ActionTypes.GET_BOOK_FAILURE);
