import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { delay, map, Observable, retryWhen, tap } from 'rxjs';

import { getTitleAction } from 'src/app/shared/modules/header/store/actions/getTitle.action';
import { BookInterface } from 'src/app/shared/types/book.Interface';

import { ChapterInterface } from 'src/app/book/types/chapter.Interface';
import { bookSelector } from '../store/selectors';
import { getBookAction } from '../store/actions/getBook.action';

@Injectable()
export class GetChapterService {
  bookIdParam!: string;
  chapterIdParam!: string;
  constructor(private store: Store, private route: ActivatedRoute) {}

  getChapter(chapterIdParam: string): Observable<ChapterInterface> {
    this.getParams();

    return this.store.pipe(
      select(bookSelector),
      tap((book) => this.setTitle(book, chapterIdParam)),
      map((book) => book.chapters.filter((ch) => ch.id === chapterIdParam)),
      map((c) => c[0]),
      retryWhen((errors) =>
        errors.pipe(
          tap(() => {
            this.store.dispatch(getBookAction({ params: this.bookIdParam }));
          }),
          delay(50)
        )
      )
    );
  }

  setTitle(book: BookInterface, chapterIdParam: string) {
    this.store.dispatch(
      getTitleAction({ title: book.title + ' ' + chapterIdParam })
    );
  }

  getParams() {
    this.chapterIdParam = this.route.snapshot.paramMap.get('chapterId') || '';
    this.bookIdParam = this.route.snapshot.queryParamMap.get('id') || '';
  }
}
