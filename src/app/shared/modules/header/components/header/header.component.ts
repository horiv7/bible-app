import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TitleType } from 'src/app/shared/modules/header/types/title.type';
import { titleSelector } from '../../store/selectors';

@Component({
  selector: 'ba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('title') titleProps!: string | '';
  title$!: Observable<TitleType>;
  bookIdParam!: string;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.title$ = this.store.pipe(select(titleSelector));
    this.bookIdParam = this.route.snapshot.queryParamMap.get('id') || '';
  }

  back() {
    this.router.navigate([`../`], {
      relativeTo: this.route,
      queryParams: { id: this.bookIdParam },
    });
  }
}
