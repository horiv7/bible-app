import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { getBookListAction } from '../store/actions/getBookList.action';

import {
  bookListSelector,
  errorSelector,
  isLoadingSelector,
} from '../store/selectors';
import { BookCardInterface } from '../types/bookCard.Interface';

@Component({
  selector: 'ba-book-list',
  templateUrl: './bookList.component.html',
  styleUrls: ['./bookList.component.scss'],
})
export class BookListComponent implements OnInit {
  slug!: string;
  public books$!: Observable<BookCardInterface[]>;

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
    this.slug = this.route.snapshot.paramMap.get('part') || '';
    this.books$ = this.store.pipe(select(bookListSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  fetchFeed() {
    this.store.dispatch(getBookListAction({ slug: this.slug }));
  }
}
