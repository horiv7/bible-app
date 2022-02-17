import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('title') titleProps!: string | '';

  constructor(private location: Location) {}

  ngOnInit(): void {
    //this.title$ = this.bookService.getTitle()
  }

  back() {
    this.location.back();
  }
}
