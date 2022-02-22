import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { BookInterface } from 'src/app/shared/types/book.Interface';
import { getTitleAction } from 'src/app/shared/modules/header/store/actions/getTitle.action';
import { Store } from '@ngrx/store';

@Injectable()
export class GetBookService {
  constructor(private http: HttpClient, private store: Store) {}

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
