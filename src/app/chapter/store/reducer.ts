import { routerNavigationAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import { ChapterStateInterface } from 'src/app/chapter/types/chapterState.interface';

import {
  getChapterAction,
  getChapterFailureAction,
  getChapterSuccessAction,
} from './actions/getChapter.action';

const initialState: ChapterStateInterface = {
  data: null,
  error: false,
  isLoading: false,
};

const getChapterReducer = createReducer(
  initialState,
  on(
    getChapterAction,
    (state): ChapterStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getChapterSuccessAction,
    (state, action): ChapterStateInterface => ({
      ...state,
      isLoading: false,
      data: action.chapter,
    })
  ),
  on(
    getChapterFailureAction,
    (state): ChapterStateInterface => ({
      ...state,
      isLoading: false,
      error: true,
    })
  ),
  on(routerNavigationAction, (): ChapterStateInterface => initialState)
);
export function reducers(state: ChapterStateInterface, action: Action) {
  return getChapterReducer(state, action);
}
