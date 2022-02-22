import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ChapterInterface } from 'src/app/chapter/types/chapter.Interface';
import { getChapterAction } from '../../store/actions/getChapter.action';

import {
  chapterSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';

@Component({
  selector: 'ba-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {
  slug!: string;
  chapter$!: Observable<ChapterInterface | null>;
  bookIdParam!: string;
  chapterIdParam!: string;

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
    this.chapter$ = this.store.pipe(select(chapterSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  fetchFeed() {
    this.store.dispatch(getChapterAction(this.getParamsIds()));
  }

  getParamsIds() {
    this.chapterIdParam = this.route.snapshot.paramMap.get('chapter') || '';
    this.bookIdParam = this.route.snapshot.queryParamMap.get('id') || '';
    const params = {
      bookIdParam: this.bookIdParam,
      chapterIdParam: this.chapterIdParam,
    };
    return params;
  }
}
