import { createSelector } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { BookStateInterface } from 'src/app/book/types/bookState.interface';

export const bookFeatureSelector = (state: AppStateInterface) => state.book;

export const bookSelector = createSelector(
  bookFeatureSelector,
  (bookState: BookStateInterface) => {
    return bookState.data;
  }
);

export const isLoadingSelector = createSelector(
  bookFeatureSelector,
  (bookState: BookStateInterface) => bookState.isLoading
);

export const errorSelector = createSelector(
  bookFeatureSelector,
  (bookState: BookStateInterface) => bookState.error
);
export const chapterSelector = createSelector(
  bookFeatureSelector,
  (bookState: BookStateInterface) => {
    return bookState.chapter;
  }
);

export const bookLength = createSelector(
  bookFeatureSelector,
  (bookState: BookStateInterface) => bookState.bookLength
);
