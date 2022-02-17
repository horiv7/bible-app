import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { GetBiblePartsService } from '../../services/getBibleParts.service';
import { BiblePartInterface } from '../../types/biblePart.interface';
import {
  getBiblePartsAction,
  getBiblePartsFailureAction,
  getBiblePartsSuccessAction,
} from '../actions/getBibleParts.action';

@Injectable()
export class GetBiblePartsEffect {
  getBibleParts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBiblePartsAction),
      switchMap(() => {
        return this.getBiblePartsService.getBibleParts().pipe(
          map((bibleParts: BiblePartInterface[]) => {
            return getBiblePartsSuccessAction({ bibleParts });
          }),
          catchError(() => {
            return of(getBiblePartsFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private getBiblePartsService: GetBiblePartsService
  ) {}
}
