import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { getChapterAction } from '../../store/actions/getChapter.action';

import {
  bookLength,
  chapterSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { ChapterInterface } from '../../types/chapter.Interface';

@Component({
  selector: 'ba-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterComponent implements OnInit {
  slug!: string;
  chapter$!: Observable<ChapterInterface | null>;
  bookIdParam!: string;
  chapterIdParam!: string;
  bookLength$!: Observable<number | null>;

  error$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initialValues();
    this.fetchFeed();
  }

  initialValues(): void {
    this.chapter$ = this.store.pipe(select(chapterSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.bookLength$ = this.store.pipe(select(bookLength));
    this.chapterIdParam = this.route.snapshot.paramMap.get('chapterId') || '';
    this.bookIdParam = this.route.snapshot.queryParamMap.get('id') || '';
  }

  fetchFeed() {
    this.store.dispatch(
      getChapterAction({
        chapterIdParam: this.chapterIdParam,
      })
    );
  }
  next(bookLength:number) {
    let id = this.convertString(this.chapterIdParam) + 1;
    if (id <= 0) return;
    else if (id > bookLength) return;
    else {
      this.chapterIdParam = id + '';
      this.router.navigate([`../${this.chapterIdParam}`], {
        relativeTo: this.route,
        queryParams: { id: this.bookIdParam },
      });
      this.fetchFeed();
    }
  }
  previous() {
    let id = this.convertString(this.chapterIdParam) - 1;
    if (id < 1) return;
    else {
      this.chapterIdParam = id + '';
      this.router.navigate([`../${this.chapterIdParam}`], {
        relativeTo: this.route,
        queryParams: { id: this.bookIdParam },
      });
      this.fetchFeed();
    }
  }

  navigateUp() {
    this.router.navigate([`../`], {
      relativeTo: this.route,
      queryParams: { id: this.bookIdParam },
    });
  }
  convertString(value) {
    return parseFloat(value);
  }
}
