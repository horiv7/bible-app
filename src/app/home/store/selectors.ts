import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { BiblePartsStateInterface } from 'src/app/shared/types/biblePartsState.interface';

export const biblePartsFeatureSelector = (state: AppStateInterface) =>
  state.bibleParts;

export const biblePartsSelector = createSelector(
  biblePartsFeatureSelector,
  (biblePartsState:  BiblePartsStateInterface) => {
    return biblePartsState.data;
  }
);

export const isLoadingSelector = createSelector(
  biblePartsFeatureSelector,
  (biblePartsState: BiblePartsStateInterface) => biblePartsState.isLoading
);

export const errorSelector = createSelector(
  biblePartsFeatureSelector,
  (biblePartsState:  BiblePartsStateInterface) => biblePartsState.error
);
