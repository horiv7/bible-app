import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { BookCardInterface } from '../types/bookCard.Interface';

@Injectable()
export class GetBookListService {
  constructor(private http: HttpClient) {}

  getBookList(slug: string): Observable<BookCardInterface[]> {
    const fullUrl = `${environment.apiUrl}bookList.json`;
    return this.http
      .get<BookCardInterface[]>(fullUrl)
      .pipe(
        map((books) =>
          books.filter((item) => item.biblePart.toLowerCase() === slug)
        )
      );
  }
}
