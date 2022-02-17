import { Action, createReducer, on } from '@ngrx/store';

import { GetBiblePartsStateInterface } from 'src/app/shared/types/getBiblePartsState.interface';
import {
  getBiblePartsAction,
  getBiblePartsFailureAction,
  getBiblePartsSuccessAction,
} from './actions/getBibleParts.action';

const initialState: GetBiblePartsStateInterface = {
  data: [],
  error: false,
  isLoading: false,
};

const getBiblePartsReducer = createReducer(
  initialState,
  on(
    getBiblePartsAction,
    (state): GetBiblePartsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getBiblePartsSuccessAction,
    (state, action): GetBiblePartsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.bibleParts,
    })
  ),
  on(
    getBiblePartsFailureAction,
    (state): GetBiblePartsStateInterface => ({
      ...state,
      isLoading: false,
      error: true,
    })
  )
);
export function reducers(state: GetBiblePartsStateInterface, action: Action) {
  return getBiblePartsReducer(state, action);
}
