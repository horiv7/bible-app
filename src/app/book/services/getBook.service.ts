import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { BookInterface } from 'src/app/shared/types/book.Interface';
import { getTitleAction } from 'src/app/shared/modules/header/store/actions/getTitle.action';
import { select, Store } from '@ngrx/store';
import { ChapterInterface } from '../types/chapter.Interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { bookSelector } from '../store/selectors';

@Injectable()
export class GetBookService {
  constructor(
    private http: HttpClient,
    private store: Store<AppStateInterface>
  ) {}

  getBook(params: string): Observable<BookInterface> {
    const fullUrl = `${environment.apiUrl}${params}.json`;
    return this.http
      .get<BookInterface>(fullUrl)
      .pipe(tap((book) => this.setTitle(book)));
  }

  setTitle(book: BookInterface) {
    this.store.dispatch(getTitleAction({ title: book.title }));
  }
}
