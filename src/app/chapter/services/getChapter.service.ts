import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { getTitleAction } from 'src/app/shared/modules/header/store/actions/getTitle.action';
import { BookInterface } from 'src/app/shared/types/book.Interface';

import { ChapterInterface } from 'src/app/chapter/types/chapter.Interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class GetChapterService {
  constructor(private http: HttpClient, private store: Store) {}

  getChapter(
    bookIdParam: string,
    chapterIdParam: string
  ): Observable<ChapterInterface> {
    const fullUrl = `${environment.apiUrl}${bookIdParam}.json`;
    return this.http.get<BookInterface>(fullUrl).pipe(
      tap((book) => this.setTitle(book, chapterIdParam)),
      map((book) => book.chapters.filter((ch) => ch.id === chapterIdParam)),
      map((c) => c[0])
    );
  }

  setTitle(book: BookInterface, chapterIdParam: string) {
    this.store.dispatch(
      getTitleAction({ title: book.title + ' ' + chapterIdParam })
    );
  }
}
