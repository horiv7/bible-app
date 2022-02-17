import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { BookInterface } from 'src/app/shared/types/book.Interface';

import { ChapterInterface } from 'src/app/shared/types/chapter.Interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class GetChapterService {
  constructor(private http: HttpClient) {}

  getChapter(
    bookIdParam: string,
    chapterIdParam: string
  ): Observable<ChapterInterface> {
    const fullUrl = `${environment.apiUrl}${bookIdParam}.json`;
    return this.http.get<BookInterface>(fullUrl).pipe(
      map((book) => book.chapters.filter((ch) => ch.id === chapterIdParam)),
      map((c) => c[0])
    );
  }
}
