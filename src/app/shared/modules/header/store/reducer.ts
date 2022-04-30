import { Action, createReducer, on } from '@ngrx/store';

import { TitleStateInterface } from '../types/titleState.interface';
import { getTitleAction } from './actions/getTitle.action';

const initialState: TitleStateInterface = {
  data: null,
};

const getTitleReducer = createReducer(
  initialState,
  on(
    getTitleAction,
    (state, action): TitleStateInterface => ({
      ...state,
      data: action.title,
    })
  )
);
export function reducers(state: TitleStateInterface, action: Action) {
  return getTitleReducer(state, action);
}
