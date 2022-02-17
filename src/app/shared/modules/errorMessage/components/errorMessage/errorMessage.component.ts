import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ba-error-message',
  template: '<div><h2>{{messageProps}}</h2></div>',
  styleUrls: ['./errorMessage.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input('message') messageProps: string = 'Nešto nije uredu!';
  ngOnInit(): void {}
}
