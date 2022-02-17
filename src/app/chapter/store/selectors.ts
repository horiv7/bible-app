import { createSelector } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ChapterStateInterface } from 'src/app/shared/types/chapterState.interface';

export const chapterFeatureSelector = (state: AppStateInterface) =>
  state.chapter;

export const chapterSelector = createSelector(
  chapterFeatureSelector,
  (chapterState: ChapterStateInterface) => {
    return chapterState.data;
  }
);

export const isLoadingSelector = createSelector(
  chapterFeatureSelector,
  (chapterState: ChapterStateInterface) => chapterState.isLoading
);

export const errorSelector = createSelector(
  chapterFeatureSelector,
  (chapterState: ChapterStateInterface) => chapterState.error
);
