import { createAction, props } from '@ngrx/store';

import { BiblePartInterface } from '../../types/biblePart.interface';
import { ActionTypes } from '../actionTypes';

export const getBiblePartsAction = createAction(ActionTypes.GET_BIBLE_PARTS);

export const getBiblePartsSuccessAction = createAction(
  ActionTypes.GET_BIBLE_PARTS_SUCCESS,
  props<{ bibleParts: BiblePartInterface[] }>()
);

export const getBiblePartsFailureAction = createAction(
  ActionTypes.GET_BIBLE_PARTS_FAILURE
);
