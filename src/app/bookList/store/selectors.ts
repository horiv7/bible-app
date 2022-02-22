import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { BookListStateInterface } from 'src/app/bookList/types/bookListState.interface';

export const bookListFeatureSelector = (state: AppStateInterface) =>
  state.bookList;

export const bookListSelector = createSelector(
  bookListFeatureSelector,
  (bookListState: BookListStateInterface) => {
    return bookListState.data;
  }
);

export const isLoadingSelector = createSelector(
  bookListFeatureSelector,
  (bookListState: BookListStateInterface) => bookListState.isLoading
);

export const errorSelector = createSelector(
  bookListFeatureSelector,
  (bookListState: BookListStateInterface) => bookListState.error
);
