import { createAction, props } from '@ngrx/store';
import { TitleType } from 'src/app/shared/types/title.type';

import { ActionTypes } from '../actionTypes';

export const getTitleAction = createAction(
  ActionTypes.GET_TITLE,
  props<{ title: TitleType }>()
);
