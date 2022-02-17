import { createAction, props } from '@ngrx/store';

import { BookCardInterface } from '../../types/bookCard.Interface';
import { ActionTypes } from '../actionTypes';

export const getBookListAction = createAction(
  ActionTypes.GET_BOOK_LIST,
  props<{ slug: string }>()
);

export const getBookListSuccessAction = createAction(
  ActionTypes.GET_BOOK_LIST_SUCCESS,
  props<{ bookList: BookCardInterface[] }>()
);

export const getBookListFailureAction = createAction(
  ActionTypes.GET_BOOK_LIST_FAILURE
);
