import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { BookInterface } from 'src/app/shared/types/book.Interface';

@Injectable()
export class GetBookService {
  constructor(private http: HttpClient) {}

  getBook(params: string): Observable<BookInterface> {
    const fullUrl = `${environment.apiUrl}${params}.json`;
    return this.http.get<BookInterface>(fullUrl);
  }
}
