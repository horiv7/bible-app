import { routerNavigationAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import { BookStateInterface } from 'src/app/book/types/bookState.interface';

import {
  getBookAction,
  getBookFailureAction,
  getBookSuccessAction,
} from './actions/getBook.action';

const initialState: BookStateInterface = {
  data: null,
  error: false,
  isLoading: false,
};

const getBookReducer = createReducer(
  initialState,
  on(
    getBookAction,
    (state): BookStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getBookSuccessAction,
    (state, action): BookStateInterface => ({
      ...state,
      isLoading: false,
      data: action.book,
    })
  ),
  on(
    getBookFailureAction,
    (state): BookStateInterface => ({
      ...state,
      isLoading: false,
      error: true,
    })
  ),
  on(routerNavigationAction, (): BookStateInterface => initialState)
);
export function reducers(state: BookStateInterface, action: Action) {
  return getBookReducer(state, action);
}
