import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { BookInterface } from 'src/app/shared/types/book.Interface';
import { getBookAction } from '../../store/actions/getBook.action';

import {
  bookSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';

@Component({
  selector: 'ba-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  slug!: string;
  book$!: Observable<BookInterface | null>;
  params!: string;
  error$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initialValues();
    this.fetchFeed();
  }

  initialValues(): void {
    this.params = this.route.snapshot.queryParamMap.get('id') || '';
    this.book$ = this.store.pipe(select(bookSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  fetchFeed() {
    this.store.dispatch(getBookAction({ params: this.params }));
    window.scrollTo(0, 0);
  }
}
