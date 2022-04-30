import { routerNavigationAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import { BookStateInterface } from 'src/app/book/types/bookState.interface';

import {
  getBookAction,
  getBookFailureAction,
  getBookSuccessAction,
 
} from './actions/getBook.action';
import { getChapterAction, getChapterFailureAction, getChapterSuccessAction } from './actions/getChapter.action';

const initialState: BookStateInterface = {
  data: null,
  error: false,
  isLoading: false,
  chapter: null,
  bookLength: null,
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
      bookLength:action.book.chapters.length
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
  on(
    getChapterAction,
    (state): BookStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getChapterSuccessAction,
    (state, action): BookStateInterface => ({
      ...state,
      isLoading: false,
      chapter: action.chapter,
    })
  ),
  on(
    getChapterFailureAction,
    (state): BookStateInterface => ({
      ...state,
      isLoading: false,
      error: true,
    })
  ),
  on(
    routerNavigationAction,
    (state): BookStateInterface => ({
      ...state,
      isLoading: false,
      error: false,
    })
  )
);
export function reducers(state: BookStateInterface, action: Action) {
  return getBookReducer(state, action);
}
