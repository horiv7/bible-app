import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ba-loading',
  template: '<div><h2>Učitava se...</h2></div> ',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  ngOnInit(): void {}
}
