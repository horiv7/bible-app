import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { GetBiblePartsStateInterface } from 'src/app/shared/types/getBiblePartsState.interface';

export const biblePartsFeatureSelector = (state: AppStateInterface) =>
  state.bibleParts;

export const biblePartsSelector = createSelector(
  biblePartsFeatureSelector,
  (biblePartsState: GetBiblePartsStateInterface) => {
    return biblePartsState.data;
  }
);

export const isLoadingSelector = createSelector(
  biblePartsFeatureSelector,
  (biblePartsState: GetBiblePartsStateInterface) => biblePartsState.isLoading
);

export const errorSelector = createSelector(
  biblePartsFeatureSelector,
  (biblePartsState: GetBiblePartsStateInterface) => biblePartsState.error
);
