import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { getTitleAction } from 'src/app/shared/modules/header/store/actions/getTitle.action';
import { BookCardInterface } from '../types/bookCard.Interface';

@Injectable()
export class GetBookListService {
  constructor(private http: HttpClient, private store: Store) {}

  getBookList(slug: string): Observable<BookCardInterface[]> {
    const fullUrl = `${environment.apiUrl}bookList.json`;
    return this.http.get<BookCardInterface[]>(fullUrl).pipe(
      map((books) =>
        books.filter((item) => item.biblePart.toLowerCase() === slug)
      ),
      tap((books) => this.setTitle(books))
    );
  }

  setTitle(books: BookCardInterface[]) {
    this.store.dispatch(getTitleAction({ title: books[0].biblePart }));
  }
}
