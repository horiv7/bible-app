import { createAction, props } from '@ngrx/store';
import { ChapterInterface } from 'src/app/chapter/types/chapter.Interface';

import { ActionTypes } from '../actionTypes';

export const getChapterAction = createAction(
  ActionTypes.GET_CHAPTER,
  props<{ bookIdParam: string; chapterIdParam: string }>()
);

export const getChapterSuccessAction = createAction(
  ActionTypes.GET_CHAPTER_SUCCESS,
  props<{ chapter: ChapterInterface }>()
);

export const getChapterFailureAction = createAction(
  ActionTypes.GET_CHAPTER_FAILURE
);
