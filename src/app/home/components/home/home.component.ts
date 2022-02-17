import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { getBiblePartsAction } from '../../store/actions/getBibleParts.action';

import {
  biblePartsSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { BiblePartInterface } from '../../types/biblePart.interface';

@Component({
  selector: 'ba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  oldTestimonyParts$!: Observable<BiblePartInterface[] | null>;
  newTestimonyParts$!: Observable<BiblePartInterface[] | null>;
  error$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initialValues();
    this.fetchFeed();
  }

  initialValues(): void {
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.oldTestimonyParts$ = this.store.pipe(
      select(biblePartsSelector),
      map((el: BiblePartInterface[]) =>
        el.filter((item) => item.biblePart === 'Stari zavet')
      )
    );
    this.newTestimonyParts$ = this.store.pipe(
      select(biblePartsSelector),
      map((el: BiblePartInterface[]) =>
        el.filter((item) => item.biblePart === 'Novi zavet')
      )
    );
  }

  fetchFeed() {
    this.store.dispatch(getBiblePartsAction());
  }
}
