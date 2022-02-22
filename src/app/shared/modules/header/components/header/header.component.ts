import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TitleType } from 'src/app/shared/types/title.type';
import { titleSelector } from '../../store/selectors';

@Component({
  selector: 'ba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('title') titleProps!: string | '';
  title$!: Observable<TitleType>;

  constructor(private location: Location, private store: Store) {}

  ngOnInit(): void {
    this.title$ = this.store.pipe(select(titleSelector));
  }

  back() {
    this.location.back();
  }
}
