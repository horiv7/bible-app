import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

 import { TitleStateInterface } from '../types/titleState.interface';

export const titleFeatureSelector = (state: AppStateInterface) => state.title;

export const titleSelector = createSelector(
  titleFeatureSelector,
  (titleState: TitleStateInterface) => titleState.data
);
