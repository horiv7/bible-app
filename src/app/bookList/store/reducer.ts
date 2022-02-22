import { routerNavigationAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';

import { BookListStateInterface } from 'src/app/bookList/types/bookListState.interface';
import {
  getBookListAction,
  getBookListFailureAction,
  getBookListSuccessAction,
} from './actions/getBookList.action';

const initialState: BookListStateInterface = {
  data: [],
  error: false,
  isLoading: false,
};

const getBookListReducer = createReducer(
  initialState,
  on(
    getBookListAction,
    (state): BookListStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getBookListSuccessAction,
    (state, action): BookListStateInterface => ({
      ...state,
      isLoading: false,
      data: action.bookList,
    })
  ),
  on(
    getBookListFailureAction,
    (state): BookListStateInterface => ({
      ...state,
      isLoading: false,
      error: true,
    })
  ),
  on(routerNavigationAction, (): BookListStateInterface => initialState)
);
export function reducers(state: BookListStateInterface, action: Action) {
  return getBookListReducer(state, action);
}
