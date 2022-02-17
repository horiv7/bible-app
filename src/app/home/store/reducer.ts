import { Action, createReducer, on } from '@ngrx/store';

import { BiblePartsStateInterface } from 'src/app/shared/types/BiblePartsState.interface';
import {
  getBiblePartsAction,
  getBiblePartsFailureAction,
  getBiblePartsSuccessAction,
} from './actions/getBibleParts.action';

const initialState: BiblePartsStateInterface = {
  data: [],
  error: false,
  isLoading: false,
};

const getBiblePartsReducer = createReducer(
  initialState,
  on(
    getBiblePartsAction,
    (state): BiblePartsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getBiblePartsSuccessAction,
    (state, action): BiblePartsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.bibleParts,
    })
  ),
  on(
    getBiblePartsFailureAction,
    (state): BiblePartsStateInterface => ({
      ...state,
      isLoading: false,
      error: true,
    })
  )
);
export function reducers(state: BiblePartsStateInterface, action: Action) {
  return getBiblePartsReducer(state, action);
}
